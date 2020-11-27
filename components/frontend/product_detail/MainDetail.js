
import React,{useState,useMemo,useContext} from 'react';
import EditorData from './EditorData';
import ImageGallery from './ImageGallery';
import MainEvent from './MainEvent';
import Review from './Review';
import Price from './Price';
import Remark from './Remark';
import {toDateISO} from '../../../utils/tools'
import {calPackagePrice} from '../../../utils/packageHelper'
import UserContext from '../../../contexts/UserContext';


const Detail = (props) => {
  const {packages} = props;
  const [state,setState] = useState({
    date : toDateISO(new Date()),
    adult : 1,
    children : 0
  })
  const { user } = useContext(UserContext);

  const priceData = useMemo(() =>{
    return calPackagePrice(packages,user,state.date,state.adult,state.children)
  },[state,user])

  console.log('priceData',priceData)
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
                
                <EditorData name="Description" data={packages?.description} />
                {/* <EditorData name="Highlight" data={packages?.highlight} />
                <EditorData name="Itinerary" data={packages?.itinerary} /> */}

                <ImageGallery packages={packages} />
                <MainEvent packages={packages} />
                <Remark data={packages?.remark} />
              </section>
              {/* <section id="reviews">
                <Review />
              </section>
              <hr /> */}
                
            </div>
            <aside className="col-lg-4" id="sidebar">
              <Price state={state} setState={setState} priceData={priceData} />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
export default Detail