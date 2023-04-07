import { createContext, useContext, useEffect, useState } from 'react';
import { offerServiceFactory } from '../services/offerService';
import { AuthContext } from './AuthContext';


export const OfferContext = createContext();

export const OfferContextProvider = ({
    children
}) => {

    const [offers, setOffers] = useState([]);

    const auth = useContext(AuthContext)
    const offerService = offerServiceFactory(auth.token);


    useEffect(() => {

        try {
            offerService.getAll()
                .then(result => {
                    setOffers(result)

                })
        } catch (error) {
            console.log('Problem with gettin offers in catalog')
        };

    }, [offerService]);





    const offerContextValues = {
        offers,
        setOffers,

    };



    return (
        <OfferContext.Provider value={offerContextValues}>
            {children}
        </ OfferContext.Provider>

    )
};


