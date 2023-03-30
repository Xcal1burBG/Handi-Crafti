import { ImageUnit } from '../ImageUnit/ImageUnit';
import './Details.css';

export const Details = () => {
    return (
        <div className="details">

            <p className="details-title">Hardcoded title </p>


            <p className="details-description">Hardcoded description, Hardcoded description, Hardcoded description, Hardcoded description </p>

            <div className="details-user-container">

                <p className="details-username">User: Awocadoo</p>

                <div className="details-rating-container">

                    <div className="details-rating">
                        <p >Rating: 9.8</p>
                    </div>

                </div>

            </div>

            <div className="details-all-images-container">
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
               
                           </div>


        </div>

    )

}