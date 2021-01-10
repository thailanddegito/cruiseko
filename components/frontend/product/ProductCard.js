
import React,{useContext, useEffect} from 'react';
import Link from 'next/link';
import UserContext from '../../../contexts/UserContext';
import {calPackagePriceCard} from '../../../utils/packageHelper'

const ProductCard = (props) => {
  const {packages} = props;
  const { user } = useContext(UserContext);

  // console.log('pkg',packages)
  // console.log('price',calPackagePriceCard(packages,user))
  
  const {price,unit} = calPackagePriceCard(packages,user);

  console.log(packages);

  const calculate = (startTime, endTime) => {
    var total_time = '';
    var time1 = startTime.split(':'), 
    time2 = endTime.split(':');
    var hours1 = parseInt(time1[0], 10),
    hours2 = parseInt(time2[0], 10),
    
    mins1 = parseInt(time1[1], 10),
    mins2 = parseInt(time2[1], 10);
    var hours = hours2 - hours1, mins = 0;
    if (hours < 0) hours = 24 + hours;
    if (mins2 >= mins1) {
        mins = mins2 - mins1;
    }
    else {
        mins = (mins2 + 60) - mins1;
        hours--;
    }

    console.log('hours', hours);
    console.log('mins', mins);
    mins = mins / 60; // take percentage in 60
    hours += mins;
    hours = hours.toFixed(2);
    total_time = hours;
    return total_time;
  }

  var totalHours = '';

  if(packages){
    var startTime = packages.start_time;
    var endTime = packages.end_time;
    totalHours = calculate(startTime, endTime);
  }
 

  console.log(totalHours);

  return (
    packages ? (
      <>
        <div className="col-xl-4 col-lg-6 col-md-6 card-top">
          <div className="box_grid">
            <figure>
              {/* <a href="#0" className="wish_bt"></a> */}
              <Link href={`/package-details/[id]`} as={`/package-details/${packages.id}-${packages.name}`}>
                <a>
                  <img src={packages.picture ? packages.picture : "/template/img/tour_1.jpg"} className="img-fluid" alt="" width="800" height="533"/>
                  <div className="read_more"><span>Read more</span></div>
                </a>
              </Link>
              <small>{packages.products_category?.name}</small>
            </figure>
            <div className="wrapper">
              <h3>
              <Link href={`/package-details/[id]`} as={`/package-details/${packages.id}-${packages.name}`}>
                <a className="show-color">{packages.name ? packages.name : null}</a>
              </Link>
              </h3>
              <p className="short-description">{packages.short_description ? packages.short_description : null}</p>
              {
                price !== -1 ? (
                  <span className="price"> From <strong> {parseInt(price) } </strong> / per {unit} </span>
                )
                : <span className="price"></span>
              }
              
            </div>
            <ul>
              <li><i className="icon_clock_alt"></i> 1h 30min</li>
              <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>5.0</strong></div></li>
            </ul>
          </div>
        </div>
      </>
    ) : null
  )
}
export default ProductCard