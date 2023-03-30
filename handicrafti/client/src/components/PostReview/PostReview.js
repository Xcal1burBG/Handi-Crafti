import './PostReview.css';

export const PostReview = () => {
    return (
        <div className="create">
            <div className="create-form-container">
                <form className="create-form" action="#" method="post">

                    <span>User: Username</span>

                    <label htmlFor="description">Review text</label>
                    <textarea type="text" className="create-input create-description" name="description">
                    </textarea>

                    <label name="rating-value">Choose rating</label>
                    <input type='number' name="rating-value" />

                    <button id="create-submit" type="submit">Post</button>
                </form>
            </div>
        </div>
    )

}