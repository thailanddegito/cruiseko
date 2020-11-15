
import React, { useState } from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  '/template/img/gallery/tour_list_1.jpg',
  '/template/img/gallery/tour_list_1.jpg',
  '/template/img/gallery/tour_list_1.jpg',
  '/template/img/gallery/tour_list_1.jpg',
];

const Banner = (props) => {
  const {error} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(1);


  return (
    <>
      <section className="hero_in tours_detail">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp"><span></span>Tour detail page</h1>
          </div>
          <span className="magnific-gallery">
            <a href="#" className="btn_photos" title="Photo title"  onClick={() => setIsOpen(true)}>View photos</a>
          </span>
        </div>
      </section>
       
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
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
      )}
    </>
  )
}
export default Banner