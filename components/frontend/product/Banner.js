import React from 'react';

const Banner = (props) => {
  const {data} = props;

  return (
    data ? (
      <>
        <section className="hero_single version_2">
          <div className="wrapper">
            <div className="container">
              <h3>Book unique experiences</h3>
              <p>Expolore top rated tours, hotels and restaurants around the world</p>
            </div>
          </div>
        </section>
        <style jsx>
          {`
            .hero_single.version_2:before {
              background: url(${data.banner ? data.banner : '../img/home_section_1.jpg'}) center center no-repeat;
              background-size: cover;
            }
          `}
        </style>
      </>
    ) : null
  )
}
export default Banner