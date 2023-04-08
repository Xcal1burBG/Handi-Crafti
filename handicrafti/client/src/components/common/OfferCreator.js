import { Navigate, Outlet, useParams } from "react-router-dom";
import { useContext } from "react";
import { OfferContext } from "../../Contexts/OfferContext";
import { AuthContext } from "../../Contexts/AuthContext";

export const OfferCreator = ({ children }) => {
  const { offerId } = useParams();
  const { getOffer } = useContext(OfferContext);
  const { userId } = useContext(AuthContext);

  const currentOffer = getOffer(offerId);

  if (currentOffer && currentOffer.handiCrafterId !== userId) {
    return <Navigate to={`offers/catalog`} />;
  }

  return children ? children : <Outlet />;
};
