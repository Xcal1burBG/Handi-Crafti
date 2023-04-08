import { useContext, useEffect } from 'react';
import { ImageUnit } from '../ImageUnit/ImageUnit';
import './EditOffer.css';
import { useParams, Link } from 'react-router-dom';
import { OfferContext, useOfferContext } from '../../Contexts/OfferContext';
import { offerServiceFactory } from '../../services/offerService';
import { useErrorContext } from '../../Contexts/ErrorContext';
import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';

export const EditOffer = () => {
    
    const {offerId} = useParams();
    const { onEditOfferSubmit } = useOfferContext();
    const { errors, minLength, isFormValid, validateImage } = useErrorContext();


    const offerService = useService(offerServiceFactory);
        const { values, changeHandler, onSubmit, changeValues } = useForm(
        {
            id: offerId,
            title: "",
            description: "",
            photos: "",
        },
        onEditOfferSubmit
    );

    useEffect(() => {
        offerService.getById(offerId)
            .then(result => {
                changeValues(result);
            })
            .catch(error => {
                console.log(error);
            });
    }, [offerId]);





    return (
        <form className="edit" onSubmit={onSubmit}>

            <div className="edit-offer-text-container">
                <input className="edit-title edit-input"
                    name="title"
                    value={values.title}
                    onChange={changeHandler}
                    onBlur={(e) => minLength(e, 3, values.title)} />
                {errors.title && (
                    <span className="edit-error">
                        Title must be at least 3 characters long!
                    </span>
                )}


                <textarea type="text"
                    className="edit-description edit-input"
                    value={values.description}
                    onChange={changeHandler}
                    name="description"
                    rows="2"
                    cols="50"
                    onBlur={(e) => minLength(e, 10, values.description)} >
                </textarea>
                {errors.description && (
                    <span className="edit-error">
                        Description must be at least 10 characters long!
                    </span>
                )}

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


                <Link to={`/offers/details/${offerId}`} style={{ textDecoration: 'none' }}>
                    <button className="edit-save-submit">Cancel</button>
                </Link>


                <button className="edit-save-submit" type="submit">Save changes</button>
            </div>


        </form>

    )

}