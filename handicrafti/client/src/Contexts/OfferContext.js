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


    const onPostReviewSubmit = async (values) => {
        try {
            const result = await reviewService.create(values);

            setOffers((state) => ({...state, }), result);
            navigate('/offers/catalog');
        } catch (error) {
            console.log('problem');
        }

    };



    useEffect(() => {
        offerService.getAll()
            .then(result => {
                setOffers(result);

            }).catch(error => {
                console.log(error)

            });

    }, []);


    const onCreateOfferSubmit = async (values) => {
        try {

            const result = await offerService.create(values);
            console.log(result);

            setOffers(state => [...state, result]);

            navigate('/offers/catalog');

        } catch (error) {
            console.log('There is problem in AuthContext on create offer');
        }

    }
    const onEditOfferSubmit = async (pet) => {
        const result = await offerService.edit(pet._id, pet);
        const { title, description, photos } = result;
        if (
            title === "" ||
            description === "" ||
            photos === ""
        ) {
            const message = "All fields are required!";
            return;
        }
    }

    const onDeleteOfferSubmit = async (values) => {

    }


    const offerContextValues = {
        offers,
        setOffers,
        onCreateOfferSubmit,
        onEditOfferSubmit,
        onDeleteOfferSubmit,
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