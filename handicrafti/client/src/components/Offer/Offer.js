import './Offer.css';

export const Offer = () => {
    return (


        <div className="offer">


            <div className="image-container">
                <img className="offer-image" src="https://portret.blog.bg/photos/91400/original/dvoika-m.jpg" alt="" />
            </div>



            <p className="offer-description">Hardcoded description </p>

            <div className="user-container">

                <div className="offer-username-image">
                    <img className="avatar-image" src="../../avatar.jpg" alt="" />
                    <p className="offer-username">Username</p>
                </div>

                <div className="offer-rating-container">
                    <p className="offer-rating">Рейтинг</p>
                    <p className="offer-rating-value">9.8</p>

                </div>

            </div>


        </div>

    )
}