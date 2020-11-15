
import React from 'react';

const Banner = (props) => {
  const {error} = props;

  return (
    <>
      <section className="hero_in tours_detail">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp"><span></span>Tour detail page</h1>
          </div>
          <span className="magnific-gallery">
            <a href="/template/img/gallery/tour_list_1.jpg" className="btn_photos" title="Photo title" data-effect="mfp-zoom-in">View photos</a>
            <a href="/template/img/gallery/tour_list_2.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
            <a href="/template/img/gallery/tour_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
          </span>
        </div>
      </section>
    </>
  )
}
export default Banner