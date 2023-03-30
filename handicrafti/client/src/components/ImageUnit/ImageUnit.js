import './ImageUnit.css'

export const ImageUnit = () => {
    return (

        <>

            <div className="details-image-text-container">
                <div className="details-image-unit-container">

                    <img className="details-image-unit" src="https://portret.blog.bg/photos/91400/original/dvoika-m.jpg" alt="" />

                </div>

                <span type="text" className="make-main">Make main</span>
                <span type="text" className="details-delete-photo">Delete photo</span>

            </div>

        </>
    )
}