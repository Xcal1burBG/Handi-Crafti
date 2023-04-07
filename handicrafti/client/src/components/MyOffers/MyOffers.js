import './MyOffers.css';
import { Offer } from '../Offer/Offer';
import { offerServiceFactory } from '../../services/offerService';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { offerService } from '../../services/offerService';
import { OfferContext } from '../../Contexts/OfferContext';


export const MyOffers = () => {

    const auth = useContext(AuthContext);
    const { userId } = useContext(AuthContext);
    const [myOffers, setMyOffers] = useState([]);
    const offerService = offerServiceFactory(auth.token);

    useEffect(() => {
        offerService.getByUserId(userId)
            .then(result => {
                setMyOffers(result);

            }).catch(error => {
                console.log(error)

            });

    }, []);

    return (
        <div className="myoffers-container">
            {myOffers.length === 0
                ? <h3 className="no-articles">You don't have offers yet</h3>
                : myOffers.map(x => <Offer key={x.id} {...x} />)
            }


        </div>
    )
}