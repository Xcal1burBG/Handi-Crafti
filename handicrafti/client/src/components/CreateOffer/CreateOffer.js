import './CreateOffer.css';
import { useContext } from 'react';
import { OfferContext } from '../../Contexts/OfferContext';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../Contexts/AuthContext';


export const CreateOffer = () => {

    const { userId } = useContext(AuthContext);
    const { onCreateOfferSubmit } = useContext(OfferContext);


    const { values, changeHandler, onSubmit } = useForm({
        handiCrafterId: userId,
        title: '',
        description: '',
        images: '',

    }, onCreateOfferSubmit);

    return (
        <div className="create">
            <div className="create-form-container">
                <form className="create-form"
                    // action="offers/create"
                    method="POST"
                    onSubmit={onSubmit}>

                    <label htmlFor="title">Title</label>
                    <input type="text"
                        className="create-input"
                        value={values.title}
                        onChange={changeHandler}
                        name="title" />

                    <label htmlFor="description">Description</label>
                    <textarea type="text"
                        className="create-input create-description"
                        value={values.description}
                        onChange={changeHandler}
                        name="description">
                    </textarea>

                    {/* Photo upload will be done in better times */}
                    {/* <label htmlFor="file_upload">Upload main photo</label>
                        <input className="create-photo-upload"
                            type="file"
                            id="file-upload"
                            value={values.file_upload}
                            onChange={handleFileChange }
                            name="file_upload" /> */}

                    <label htmlFor="images">Link to a photo</label>
                    <input className="create-input"
                        type="text"
                        value={values.images}
                        onChange={changeHandler}
                        name="images" />


                    <button id="create-submit" type="submit">Create</button>
                </form>
            </div>
        </div>
    )

}

