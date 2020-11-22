
import React, { useState } from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Banner = (props) => {
  const {packages} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = packages ? packages.products_images.filter((val) => val.type === 'banner') : [];
  console.log(images);
  
  return (
    packages ? (
      <>
        <section className="hero_in tours_detail">
          <div className="wrapper">
            <div className="container">
              <h1 className="fadeInUp"><span></span>{packages.name ? packages.name : null}</h1>
            </div>
            <span className="magnific-gallery">
              <a href="#" className="btn_photos" title="Photo title"  onClick={() => setIsOpen(true)}>View photos</a>
            </span>
          </div>
          <style jsx>
          {`
            .hero_in.tours_detail:before {
              background: url(${images ? images[0]?.image : '../img/hero_in_tours_detail.jpg'}) center center no-repeat;
              background-size: cover;
            }
          `}
          </style>
        </section>
        
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
    ) : null
  )
}
export default Banner