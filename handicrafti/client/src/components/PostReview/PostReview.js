import './PostReview.css';

export const PostReview = () => {
    return (
        <div className="postreview">
            <div className="postreview-form-container">
                <form className="postreview-form" action="#" method="post">

                    <span className="postreview-user">User: Username</span>

                    <label htmlFor="description">Review text</label>
                    <textarea type="text" className="postreview-input postreview-description" name="description">
                    </textarea>

                    <label htmlFor="rating-value" name="postreview-rating-value">Choose rating</label>
                    <input className="postreview-rating-input" type='number' name="rating-value" />

                    <button id="postreview-submit" type="submit">Post</button>
                </form>
            </div>
        </div>
    )

}