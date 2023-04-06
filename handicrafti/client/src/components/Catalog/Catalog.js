import './Catalog.css';
import { useContext } from "react";
import { OfferContext } from "../../Contexts/OfferContext";

import { Offer } from "../Offer/Offer"


export const Catalog = () => {

     const { offers } = useContext(OfferContext);


    return (

        <div className="catalog-container">

            {/* {offers.length === 0
                ? <h3 className="no-articles">No offers yet</h3>
                : offers.map(x => <Offer key={x._id} {...x} />)
            } */}



           <Offer />
            <Offer />
            <Offer />
            <Offer />
            <Offer />
            <Offer />
            <Offer />
            <Offer />
            <Offer />
            <Offer /> 


        </div>



    )
}