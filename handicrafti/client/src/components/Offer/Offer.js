import './Offer.css';

export const Offer = ({
    title,
    images,
    handiCraftersUsername
}) => {




    return (


        <div className="offer">

            <div className="offer-image-container">
                <img className="offer-image" src={images} alt="" />
            </div>



            <p className="offer-title">{title} </p>

            <div className="user-container">

                <p className="offer-username">User: {handiCraftersUsername}</p>
                {/* I am making different kind of candles. For more information and prices - phone me or email me */}
                {/* I create vases from different materials and in various shapes */}

                <div className="offer-rating-container">

                    {/* <div className="offer-rating">
                        <p >Rating: </p>
                    </div> */}

                    {/* <div className="offer-rating-value">
                        <p >9.8</p>
                    </div> */}

                </div>


            </div>


        </div>

    )
}