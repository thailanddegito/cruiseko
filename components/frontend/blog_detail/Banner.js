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
      </>
    ) : null
  )
}
export default Banner