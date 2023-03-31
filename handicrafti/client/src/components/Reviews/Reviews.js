import { ReviewItem } from '../ReviewItem/ReviewItem';
import './Reviews.css';

export const Reviews = () => {
    return (

        <div className="reviews-container">
            <div className="reviews-title">
                <span >Reviews for USERNAME:</span>
            </div>

            <div className="review-items-container">

                <ReviewItem />
                <ReviewItem />
                <ReviewItem />

            </div>



        </div>
    )
}