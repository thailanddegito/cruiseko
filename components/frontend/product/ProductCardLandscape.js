
import React,{useContext} from 'react';
import Link from 'next/link';
import UserContext from '../../../contexts/UserContext';

const ProductCardLandscape = (props) => {
  const {packages} = props;
  const { user } = useContext(UserContext);

  
  return (
    packages ? (
      <>
				<div className="box_list isotope-item popular">
					<div className="row no-gutters">
						<div className="col-lg-5">
							<figure>
              	<small>{packages.products_category?.name}</small>
								<Link href={`/package-details/[id]`} as={`/package-details/${packages.id}-${packages.name}`}>
                	<a>
										<img src={packages.picture ? packages.picture : "/template/img/tour_3.jpg"} className="img-fluid" alt="" width="800" height="533" />
										<div className="read_more"><span>Read more</span></div>
									</a>
								</Link>
							</figure>
						</div>
						<div className="col-lg-7">
							<div className="wrapper">
								<h3>
									<Link href={`/package-details/[id]`} as={`/package-details/${packages.id}-${packages.name}`}>
										<a className="show-color">{packages.name ? packages.name : null}</a>
									</Link>
								</h3>
								<p className="short-land-description">{packages.short_description ? packages.short_description : null}</p>
								<span className="price">From <strong>$45</strong> /per person</span>
							</div>
							<ul>
								<li><i className="icon_clock_alt"></i> 1h 30min</li>
								<li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
							</ul>
						</div>
					</div>
				</div>
      </>
    ) : null
  )
}
export default ProductCardLandscape