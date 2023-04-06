import './CreateOffer.css';
import { useContext } from 'react';
import { OfferContext } from '../../Contexts/OfferContext';
import { useForm } from '../../hooks/useForm';


export const CreateOffer = () => {
    const {onCreateOfferSubmit} = useContext(OfferContext);
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        description: '',
        file_upload: '',
    }, onCreateOfferSubmit);

    return (
        <div className="create">
            <div className="create-form-container">
                <form className="create-form" action="offers/create" method="POST" onSubmit={onSubmit}>

                    <label htmlFor="title">Title</label>
                    <input type="text" className="create-input" value={values.title} name="title" />

                    <label htmlFor="description">Description</label>
                    <textarea type="text" className="create-input create-description" value={values.description} name="description">
                    </textarea>

                    <label htmlFor="file_upload">Upload main photo</label>
                    <input className = "create-photo-upload" type="file" id="file-upload" name="file_upload"/>
                    
                   
                    <button id="create-submit" type="submit">Create</button>
                </form>
            </div>
        </div>
    )

}

