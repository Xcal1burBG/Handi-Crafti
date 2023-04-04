import { createContext, useState, useContext } from 'react';
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






}