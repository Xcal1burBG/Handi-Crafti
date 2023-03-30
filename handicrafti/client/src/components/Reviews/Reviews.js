import { ReviewItem } from '../ReviewItem/ReviewItem';
import './Reviews.css';

export const Reviews = () => {
    return (
        <>
        <div className ="reviews"> Reviews for user USERNAME</div>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        </>
    )
}