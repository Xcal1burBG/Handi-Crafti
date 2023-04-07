import { ImageUnit } from '../ImageUnit/ImageUnit';
import './Details.css';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { OfferDetailsContext } from '../../Contexts/OfferDetailsContext';
import { AuthContext } from '../../Contexts/AuthContext';
import { offerServiceFactory } from '../../services/offerService';
import { OfferContext } from '../../Contexts/OfferContext';

export const Details = () => {

    const { offerId } = useParams();
    const {offer} = useContext(OfferDetailsContext);


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

                <form className="editBtn" action="/edit">
                    <button className="details-edit-submit" >Edit</button>
                </form>

                <button className="delete-submit" type="submit">Delete</button>
            </div >


        </div >

    )

}