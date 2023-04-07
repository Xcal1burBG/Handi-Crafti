import { useNavigate } from 'react-router-dom';
import './Offer.css';
import { baseUrl } from '../../config/config';

export const Offer = ({
    id,
    title,
    images,
    handiCraftersUsername
}) => {

    const navigate = useNavigate();

    const showDetails = (id) => {
        navigate(`/offers/get/${id}`);

    }


    return (


        <div className="offer" onClick={() => showDetails(id)}>

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