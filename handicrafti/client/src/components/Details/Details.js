import { ImageUnit } from '../ImageUnit/ImageUnit';
import './Details.css';

export const Details = () => {
    return (
        <div className="details">

            <div className="details-offer-text-container">
                <p className="details-title">Hardcoded title </p>


                <p className="details-description">Hardcoded description, Hardcoded description, Hardcoded description, Hardcoded description </p>

                <p className="details-username">User: Awocadoo</p>

                <p >Rating: 9.8</p>
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


            <div className="details-buttons-container">

                <div className = "details-add-photo-container">
                    <label className="details-label-photo" htmlFor="title">Add photo</label>
                    <input className="details-add-photo" type="file" />
                </div>


                <button className="details-edit-submit" type="submit">Edit</button>

                <button className="delete-submit" type="submit">Delete</button>
            </div>


        </div>

    )

}