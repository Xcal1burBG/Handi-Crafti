import './CreateOffer.css';
import { useContext } from 'react';
import { OfferContext } from '../../Contexts/OfferContext';
import { useForm } from '../../hooks/useForm';
import { offerServiceFactory } from '../../services/offerService';
import { useNavigate } from 'react-router-dom';


export const CreateOffer = () => {

    const {setOffers} = useContext(OfferContext);
    const navigate = useNavigate();

    const onCreateOfferSubmit = async (values) => {
        try {
            const result = await offerServiceFactory.createOffer(values);

            setOffers(result);

            navigate('/offers/catalog');

        } catch (error) {
            console.log('There is problem in AuthContext on register');
        }
     
    }




    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        description: '',
        file_upload: '',
        image_source: '',
        image_file: null
    }, onCreateOfferSubmit);

    return (
        <div className="create">
            <div className="create-form-container">
                <form className="create-form"
                    action="offers/create" 
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

                    <label htmlFor="file_upload">Upload main photo</label>
                    <input className="create-photo-upload" 
                    type="file" 
                    id="file-upload" 
                    value={values.file_upload} 
                     onChange={changeHandler}
                    name="file_upload" />


                    <button id="create-submit" type="submit">Create</button>
                </form>
            </div>
        </div>
    )

}

