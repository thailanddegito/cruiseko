
import React,{useContext} from 'react';
import Link from 'next/link';
import UserContext from '../../../contexts/UserContext';
import {calPackagePriceCard} from '../../../utils/packageHelper'

const ProductCard = (props) => {
  const {packages} = props;
  const { user } = useContext(UserContext);
  
  const {price,unit} = calPackagePriceCard(packages,user)

  return (
    packages ? (
      <>
        <div className="box_list map_view">
          <div className="row no-gutters add_top_20">
            <div className="col-4">
              <figure>
                <small>{packages.products_category?.name}</small>
                <a href="#"><img src={packages.picture ? packages.picture : "/template/img/tour_1.jpg"} className="img-fluid" alt="" width="800" height="533" /></a>
              </figure>
            </div>
            <div className="col-8">
              <div className="wrapper">
                <h3><a href="#">{packages.name ? packages.name : null}</a></h3>
                <span className="price">From <strong> {parseInt(price) } </strong> /per {unit} </span>
              </div>
              <ul>
                <li>
                  <a href="#0" className="address">On Map</a>
                </li>
                <li>
                  <div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ) : null
  )
}
export default ProductCard