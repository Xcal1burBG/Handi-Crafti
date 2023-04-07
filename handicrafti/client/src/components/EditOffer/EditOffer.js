import { ImageUnit } from '../ImageUnit/ImageUnit';
import './EditOffer.css';
import { useParams, Link } from 'react-router-dom';

export const EditOffer = () => {

    const offerId = useParams();



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
                    <Link to={`/offers/details/${offerId}`} style={{ textDecoration: 'none' }}>
                        <button className="edit-save-submit" type="submit">Cancel</button>
                    </Link>
                </form>

                <button className="edit-save-submit" type="submit">Save changes</button>
            </div>


        </form>

    )

}