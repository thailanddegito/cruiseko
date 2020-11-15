
import React from 'react';
import Description from './Description';
import ImageGallery from './ImageGallery';
import MainEvent from './MainEvent';
import Review from './Review';
import Price from './Price';

const Detail = (props) => {
  const {error} = props;

  return (
    <>
      <div className="bg_color_1">
        <nav className="secondary_nav sticky_horizontal">
          <div className="container">
            <ul className="clearfix">
              <li><a href="#description" className="active">Description</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#sidebar">Booking</a></li>
            </ul>
          </div>
        </nav>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-8">
              <section id="description">
                <Description />
                <ImageGallery />
                <MainEvent />
                <hr />
              </section>
              <section id="reviews">
                <Review />
              </section>
              <hr />
                
            </div>
            <aside className="col-lg-4" id="sidebar">
              <Price />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
export default Detail