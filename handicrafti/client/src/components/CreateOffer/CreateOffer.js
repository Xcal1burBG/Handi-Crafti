import './CreateOffer.css';

export const CreateOffer = () => {
    return (
        <div className="create">
            <div className="create-form-container">
                <form className="create-form" action="#" method="post">

                    <label htmlFor="title">Title</label>
                    <input type="text" className="create-input" name="username" />

                    <label htmlFor="description">Description</label>
                    <textarea type="text" className="create-input create-description" name="description">
                    </textarea>

                    <label htmlFor="title">Upload main photo</label>
                    <input className = "create-photo-upload" type="file" id="file-upload"/>
                    
                   
                    <button id="create-submit" type="submit">Create</button>
                </form>
            </div>
        </div>
    )

}

