import './Catalog.css';
import { Offer } from "../Offer/Offer"
import { useContext } from 'react';
import { OfferContext } from '../../Contexts/OfferContext';



export const Catalog = () => {

 const { offers } = useContext(OfferContext);

     return (

        <div className="catalog-container">

            {offers.length === 0
                ? <h3 className="no-articles">No offers yet</h3>
                : offers.map(x => <Offer key={x.id} {...x} />)
            }

        </div>



    )
}