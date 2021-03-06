import React from 'react';

const Banner = (props) => {
  const {data} = props;

  return (
    data ? (
      <>
        <section className="hero_in general">
          <div className="wrapper">
            <div className="container">
              <h1 className="fadeInUp"><span></span>Panagea blog</h1>
            </div>
          </div>
        </section>
        <style jsx>
          {`
            .hero_in.general:before {
              background: url(${data.banner ? data.banner : '../img/hero_in_bg_2.jpg'}) center center no-repeat;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
            }
          `}
        </style>
      </>
    ) : null
  )
}
export default Banner