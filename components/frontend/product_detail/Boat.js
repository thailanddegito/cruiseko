
import React, {useState, useEffect} from 'react';
import { Lightbox } from "react-modal-image";

const Boat = (props) => {
  const {data} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState(0);

  console.log('Boat', data);

  const closeLightbox = (val) => {
    setImg(val);
    setIsOpen(true);
  };

  return (
    data ? (
      <>
      <div className="pb-4">
        <h2>Boat</h2>
        <div><strong>Boat Name : </strong>{data.boat.name}</div>
        <div><strong>Description : </strong></div>
        <div className="" dangerouslySetInnerHTML={{ __html: ((!data.boat.description || data.boat.description == 'undefined') ? '' : data.boat.description) }} /><div></div>
        <div className="grid mt-3">
				  <ul className="magnific-gallery">
            <li onClick={() => closeLightbox(data.boat.picture)}>
              <figure>
                <img src={data.boat.picture ? data.boat.picture : "/template/img/gallery/large/pic_1.jpg"} alt="" />
                <figcaption>
                  <div className="caption-content">
                    <a title="Photo title" data-effect="mfp-zoom-in">
                      <i className="pe-7s-albums"></i>
                      <p>Your caption</p>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
      {
        isOpen && (
          <Lightbox
            medium={img}
            large={img}
            // alt="Hello World!"
            onClose={() => setIsOpen(false)}
          />
        )
      }
      </>
    ) : null
  )
}
export default Boat