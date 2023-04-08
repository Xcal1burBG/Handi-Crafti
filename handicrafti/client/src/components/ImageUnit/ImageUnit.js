import './ImageUnit.css'

export const ImageUnit = ({
    imageUrl
}) => {
   
    const currentUrl = window.location.href;


    return (

        <>

            <div className="details-image-text-container">
                <div className="details-image-unit-container">

                    <img className="details-image-unit" src={imageUrl} alt="offer" />

                </div>

                {/* {currentUrl.includes('edit') &&

                    <>
                        <span type="text" className="details-delete-photo">Delete photo</span>
                        <span type="text" className="make-main">Make main</span>
                    </>
                } */}

            </div>

        </>
    )
}