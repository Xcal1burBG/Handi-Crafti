import { createContext, useContext, useEffect, useState } from 'react';
import { offerServiceFactory } from '../services/offerService';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';


export const OfferContext = createContext();

export const OfferContextProvider = ({
    children
}) => {

    const [offers, setOffers] = useState([]);

    const auth = useContext(AuthContext)
    const offerService = offerServiceFactory(auth.token);
    const navigate = useNavigate();



    useEffect(() => {


        offerService.getAll()
            .then(result => {
                console.log(result);
                setOffers(result);

            }).catch(error => {
                console.log(error)

            });
        
    }, []);

    const onCreateOfferSubmit = async (values) => {
        try {
            console.log(values);
            const result = await offerService.create(values);

            setOffers(result);
            console.log('no error before');

            navigate('/offers/catalog');

        } catch (error) {
            console.log('There is problem in AuthContext on create offer');
        }

    }



    const offerContextValues = {
        offers,
        setOffers,
        onCreateOfferSubmit,

    };

   



    return (
        <OfferContext.Provider value={offerContextValues}>
            {children}
        </ OfferContext.Provider>

    )
};


