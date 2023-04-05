import { createContext, useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from "react-router-dom";
import { offerServiceFactory } from '../services/offerService';


export const OfferContext = createContext();

export const OfferProvider = ({
    children
}) => {

    const [offer, setOffer] = useState({});
    const navigate = useNavigate();

    const auth = useContext(AuthContext);
    const offerService = offerServiceFactory(auth.accessToken);

    useEffect(() => {
        offerService.getAll()
            .then(result => {
                setOffer(result);
            })
    }, []);


    const contextValues = {
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken
    };

    return (
        <>
            <OfferContext.Provider value={contextValues}>
                {children}
            </ OfferContext.Provider>
        </>
    )



}