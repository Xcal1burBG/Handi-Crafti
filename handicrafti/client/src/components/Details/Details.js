import { ImageUnit } from '../ImageUnit/ImageUnit';
import './Details.css';
import { useParams, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { offerServiceFactory } from '../../services/offerService';
import { OfferContext } from '../../Contexts/OfferContext';
import { baseUrl } from '../../config/config';

export const Details = () => {

    const { offerId } = useParams();
    const [offer, setOffer] = useState({});
    const { token, userId, username, isAuthenticated, userEmail } = useContext(AuthContext);
    const offerService = offerServiceFactory(token);


    useEffect(() => {
        const fetchData = () => {
            return new Promise((res, err) => {
                fetch(`${baseUrl}/offers/details/${offerId}`)
                    .then(response => response.json())
                    .then(data => res(data))
                    .catch(error => err(error));
            });
        };

        fetchData()
            .then(data => setOffer(data))
            .catch(error => console.log(error));
    }, []);


    return (



        <div className="details">

            <div className="details-offer-text-container">
                <p className="details-title">{offer.title}</p>


                <p className="details-description"> {offer.description} </p>

                <div className="details-user-contacts-container">

                    <p className="details-username">User: {offer.handiCraftersUsername}</p>
                    <p className="details-contacts">Contact with user:</p>
                    <p className="details-phone">Phone: {offer.phoneNumber}</p>
                    <p className="details-email">Email: {offer.email}</p>
                </div>

                {/* <p className="details-rating">Rating: 9.8</p> */}
            </div>

            <div className="details-all-images-container">
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />

            </div>


            <div className="details-buttons-container">

                <a href="/postreview">Leave a review</a>
                <a href="/reviews" >View all reviews</a>


                {/* <div className="details-add-photo-container">
                    <label className="details-label-photo" htmlFor="photo">Add photo</label>
                    <input className="details-add-photo" type="text" name="photo"/>
                </div> */}

                <Link to={`/offers/edit/${offerId}`} className="editBtn">
                    <button className="details-edit-submit" >Edit</button>
                </Link>

                <Link to={`/offers/delete/${offerId}`} className="editBtn">
                    <button className="delete-submit" type="submit">Delete</button>
                </Link>
            </div >


        </div >

    )

}