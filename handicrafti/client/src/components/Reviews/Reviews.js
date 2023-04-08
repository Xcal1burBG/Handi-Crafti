import { Link, useParams } from 'react-router-dom';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import './Reviews.css';
import { useContext } from 'react';
import { OfferContext } from '../../Contexts/OfferContext';

export const Reviews = ({

}) => {
    const { offerId } = useParams();
    const { offers } = useContext(OfferContext);

    let offer = offers.find(x => x.id === offerId);
    let reviews = [];
    console.log(offer);

    if (offer.reviewsForHandiCrafter.length != 0) {
        offer = offers.find(x => x.id === offerId);
        reviews = offer.reviewsForHandiCrafter
    }

    ;


    return (



        <div className="reviews-container">
            <div className="reviews-title">
                <span >Reviews for USERNAME: {offer.handiCraftersUsername}</span>
            </div>

            <div className="review-items-container">

                {reviews.length === 0
                    ? <h3 className="no-reviews">This user still don't have any reviews</h3>
                    : reviews.map((x, index) => (
                        <ReviewItem key={index} {...x} />
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