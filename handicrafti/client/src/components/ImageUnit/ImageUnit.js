import './ImageUnit.css'

export const ImageUnit = () => {

    const currentUrl = window.location.href;


    return (

        <>

            <div className="details-image-text-container">
                <div className="details-image-unit-container">

                    <img className="details-image-unit" src="https://portret.blog.bg/photos/91400/original/dvoika-m.jpg" alt="" />

                </div>

                {currentUrl.includes('edit') &&

                    <>
                        <span type="text" className="details-delete-photo">Delete photo</span>
                        <span type="text" className="make-main">Make main</span>
                    </>
                }

            </div>

        </>
    )
}