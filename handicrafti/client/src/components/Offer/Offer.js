import './Offer.css';

export const Offer = ({
    title,
    description,
    photos
}) => {

        return (


        <div className="offer">

            <div className="offer-image-container">
                <img className="offer-image" src="https://portret.blog.bg/photos/91400/original/dvoika-m.jpg" alt="" />
            </div>



            <p className="offer-title">Hardcoded title </p>

            <div className="user-container">

                <p className="offer-username">User: Awocadoo</p>
                 {/* I am making different kind of candles. For more information and prices - phone me or email me */}
                 {/* I create vases from different materials and in various shapes */}

                <div className="offer-rating-container">

                    <div className="offer-rating">
                        <p >Rating: </p>
                    </div>

                    <div className="offer-rating-value">
                        <p >9.8</p>
                    </div>

                </div>


            </div>


        </div>

    )
}