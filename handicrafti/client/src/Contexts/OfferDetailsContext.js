import { createContext, useContext, useEffect, useState } from "react";
import { offerServiceFactory } from "../services/offerService";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const OfferDetailsContext = createContext();

export const OfferDetailsContextProvider = ({
    children
}) => {

    const [offer, setOffer] = useState({});
    const { offerId } = useParams();
    // const { offers } = useContext(OfferContext)
    // const offer = offers.find(x => x.id == offerId);

    const auth = useContext(AuthContext);
    const offerService = offerServiceFactory(auth.token);


    useEffect(() => {
        offerService.getById(offerId)
            .then(result => {
                console.log(result);
                setOffer(result);

            }).catch(error => {
                console.log(error)

            });

    }, []);

   

  



    const offerDetailsContextValues = {

        offer,
        // getOfferDetails,
    };

    return (
        <OfferDetailsContext.Provider value={offerDetailsContextValues}>
            {children}
        </ OfferDetailsContext.Provider>

    )
};
