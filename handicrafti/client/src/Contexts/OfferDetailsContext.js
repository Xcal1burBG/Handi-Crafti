import { createContext } from "react";

export const OfferDetailsContext = createContext();

export const OfferDetailsContextProvider = ({
    children
}) => {

    const offerDetailsContextValues = {
        

    };

    return (
        <OfferDetailsContext.Provider value={offerDetailsContextValues}>
            {children}
        </ OfferDetailsContext.Provider>

    )
};
