
import React, {useEffect, useState} from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ImageGallery = (props) => {
  const {packages} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = packages ? packages.products_images.filter((val) => val.type === 'gallery') : [];

  // console.log(images);
  const handleClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  }

  return (
    <>
      <h3 className="mb-3">Images Gallery</h3>

      <div className="grid">
				<ul className="magnific-gallery">
          {
            images ? images.map((val, index) => (
              <li key={index} onClick={() => handleClick(index)}>
                <figure>
                  <img src={val.image ? val.image : "/template/img/gallery/large/pic_1.jpg"} alt="" />
                  <figcaption>
                    <div className="caption-content">
                      <a title="Photo title" data-effect="mfp-zoom-in">
                        <i className="pe-7s-albums"></i>
                        {/* <p>Your caption</p> */}
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </li>
           )) : null
          }
				</ul>
			</div>

      <hr />

      {  
        isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].image}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )
      } 
      
    </>
  )
}
export default ImageGallery