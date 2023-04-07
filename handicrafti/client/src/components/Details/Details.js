import { ImageUnit } from '../ImageUnit/ImageUnit';
import './Details.css';
import * as reviewService from '../../services/reviewService';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { OfferContext } from '../../Contexts/OfferContext';

export const Details = () => {

    const offerId = useParams();
    const {offers} = useContext(OfferContext);
    const offer = offers.find(x => x.id === offerId);
    console.log(offer);



    return (
        


        <div className="details">

            <div className="details-offer-text-container">
                <p className="details-title">Hardcoded title </p>


                <p className="details-description">Hardcoded description, Hardcoded description, Hardcoded description, Hardcoded description </p>

                <div className="details-user-contacts-container">

                    <p className="details-username">User: Awocadoo</p>
                    <p className="details-contacts">Contact with user:</p>
                    <p className="details-phone">Phone: 0886552870</p>
                    <p className="details-email">Email: ivalkov79@abv.bg</p>
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

                <form className = "editBtn" action="/edit">
                    <button className="details-edit-submit" >Edit</button>
                </form>

                <button className="delete-submit" type="submit">Delete</button>
            </div >


        </div >

    )

}