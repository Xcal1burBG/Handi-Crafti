import { Offer } from "../Offer/Offer"
import './Catalog.css';

export const Catalog = ({
    // offers
}) => {
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