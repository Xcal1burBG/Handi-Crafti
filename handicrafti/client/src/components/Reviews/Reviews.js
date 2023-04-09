import { Link, useParams } from 'react-router-dom';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import './Reviews.css';
import { useContext, useEffect, useState } from 'react';
import { OfferContext } from '../../Contexts/OfferContext';
import { AuthContext } from '../../Contexts/AuthContext';

export const Reviews = ({

}) => {
    const { offerId } = useParams();
    const { offers } = useContext(OfferContext);
    const { username } = useContext(AuthContext);

    const getOffer = useContext(OfferContext)
    const offer = getOffer();
    console.log(offer);



    const reviews = [];

    return (



        <div className="reviews-container">
            <div className="reviews-title">
                <span >Reviews for USERNAME: {offer.handiCraftersUsername}</span>
            </div>

            <div className="review-items-container">

                {reviews.length === 0
                    ? <h3 className="no-reviews">This user still don't have any reviews</h3>
                    : reviews.map((x, index) => (
                        <ReviewItem key={index} text={x.text} username={username} />
                    ))
                }

                <div className="reviews-title go-to-catalog">
                    <Link to={`/offers/details/${offer.id}`} style={{ textDecoration: 'none' }}>
                        <span >Go back to details</span>
                    </Link>
                </div>


            </div>



        </div>
    )
}