import { Navigate } from 'react-router-dom';
import { ImageUnit } from '../ImageUnit/ImageUnit';
import './EditOffer.css';
import { useParams } from 'react-router-dom';

export const EditOffer = () => {

    const offerId = useParams();

    const navigate = Navigate(`/offers/details/${offerId}`);

    const redirectToDetails = () => navigate()
    return (
        <form className="edit">

            <div className="edit-offer-text-container">
                <input className="edit-title edit-input" value="Hardcoded title" />



                <textarea type="text"
                    className="edit-description edit-input"
                    value="Hardcoded description"
                    name="description"
                    rows="2"
                    cols="50">

                </textarea>

            </div>

            <div className="edit-all-images-container">
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />
                <ImageUnit />

            </div>


            <div className="edit-buttons-container">

                <div className="edit-add-photo-container">
                    <label className="edit-label-photo" htmlFor="file">Add photo</label>
                    <input className="edit-add-photo" type="text" name="file" />
                </div>
                <form action={`/offers/details/${offerId}`}>
                    <button className="edit-save-submit" type="submit" onClick={redirectToDetails}>Cancel</button>

                </form>
                <button className="edit-save-submit" type="submit">Save changes</button>
            </div>


        </form>

    )

}