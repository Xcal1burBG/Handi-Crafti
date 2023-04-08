import { createContext, useContext, useEffect, useState } from 'react';
import { offerServiceFactory } from '../services/offerService';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { reviewServiceFactory } from '../services/reviewService';


export const OfferContext = createContext();

export const OfferContextProvider = ({
    children
}) => {

    const [offers, setOffers] = useState([]);


    const auth = useContext(AuthContext);
    const offerService = offerServiceFactory(auth.token);
    const reviewService = reviewServiceFactory(auth.token);
    const navigate = useNavigate();


    useEffect(() => {
        offerService.getAll()
            .then(result => {
                setOffers(result);

            }).catch(error => {
                console.log(error)

            });

    }, []);

    const getOffer = (offerId) => {
        const offer = offers.find((offer) => offer.id === offerId);
        return offer;
    }


    const onPostReviewSubmit = async (values) => {
        try {

            const result = await reviewService.create(values);

            setOffers(state => [{...state}, [result]]);
            navigate('/offers/catalog');
        } catch (error) {
            console.log('problem');
        }

    };


    const onCreateOfferSubmit = async (values) => {
        try {

            const result = await offerService.create(values);

            setOffers(state => [...state, result]);

            navigate('/offers/catalog');

        } catch (error) {
            console.log('There is problem in AuthContext on create offer');
        }

    }
    const onEditOfferSubmit = async (offer) => {
        const result = await offerService.edit(offer.id, offer);
        const { title, description, images } = result;
        if (
            title === "" ||
            description === "" ||
            images === ""
        ) {
            const message = "All fields are required!";
            navigate("/server-error", { state: { message } });
            return;
        }

        setOffers((state) => state.map((x) => (x.id === offer.id ? result : x)));
        navigate(`/offers/catalog`);
    }

    const deleteOffer = (offerId) => {
        setOffers((state) => state.filter(offer => offer.id !== offerId));
    };


    const offerContextValues = {
        offers,
        setOffers,
        getOffer,
        onCreateOfferSubmit,
        onEditOfferSubmit,
        deleteOffer,
        onPostReviewSubmit,

    };





    return (
        <OfferContext.Provider value={offerContextValues}>
            {children}
        </ OfferContext.Provider>

    );
};

export const useOfferContext = () => {
    const context = useContext(OfferContext);

    return context;
};