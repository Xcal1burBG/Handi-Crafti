import { createContext, useEffect, useState } from 'react';
import { offerServiceFactory } from '../services/offerService';


export const OfferContext = createContext();

export const OfferContextProvider = ({
    children
}) => {

    const [offers, setOffers] = useState({});

    useEffect(() => {
        offerServiceFactory.getAll()
            .then(result => {
                setOffers(result);
            })
    }, []);





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


