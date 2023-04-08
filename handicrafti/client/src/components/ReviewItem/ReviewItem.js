import './ReviewItem.css';

export const ReviewItem = ({
text,
username
}) => {
    return (
        <div className = "review-item">
            <span className='review-item-text'>{text}</span>
            {/* <span className='review-item-rating'>Rating: 0</span> */}
            <span>Review by: {username}</span>


          

        </div>
    )
}