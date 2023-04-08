import { useParams } from 'react-router-dom';
import './PostReview.css';
import { useForm } from '../../hooks/useForm';
import { OfferContext } from '../../Contexts/OfferContext';
import { useContext } from 'react';

export const PostReview = () => {

    const { handiCrafterId } = useParams();
    console.log(handiCrafterId);
    
    const { onPostReviewSubmit } = useContext(OfferContext);
    const { values, changeHandler, onSubmit } = useForm({
        text: '',
    }, onPostReviewSubmit);



    return (
        <div className="postreview">
            <div className="postreview-form-container">
                <form className="postreview-form" action={`/reviews/post/${handiCrafterId}`} method="POST" onSubmit ={onSubmit}>

                    <span className="postreview-user">User: Username</span>

                    <label htmlFor="description">Review text</label>
                    <textarea type="text" className="postreview-input postreview-description" value={values.text} onChange={changeHandler} name="description">
                    </textarea>

                    {/* <label htmlFor="rating-value" name="postreview-rating-value">Choose rating</label>
                    <input className="postreview-rating-input" type='number' name="rating-value" /> */}

                    <button id="postreview-submit" type="submit">Post</button>
                </form>
            </div>
        </div>
    )

}