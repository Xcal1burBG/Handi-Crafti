import { ImageUnit } from '../ImageUnit/ImageUnit';
import './EditOffer.css';

export const EditOffer = () => {
    return (
        <form className="edit">

            <div className="edit-offer-text-container">
                <input className="edit-title edit-input" value="Hardcoded title" />


                
                <textarea                 type="text" 
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
                    <input className="edit-add-photo" type="file" name="file" />
                </div>

                <button className="edit-save-submit" type="submit">Save changes</button>
            </div>


        </form>

    )

}