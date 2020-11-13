import React,{useState, memo} from 'react';
import ModalCompanyTour from './ModalCompanyTour';
import NavHeader from './NavHeader';
import NavContent from './NavContent';

const PriceInfo = memo((props) => {
  const {name, data, type, handlePriceChange} = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <ul className="nav nav-tabs">
        <NavHeader name="FIT" target="fit" active={true} />
        {/* <NavHeader name="Agent" target="agent" active={false} /> */}
        <div>
          <button className="btn-add-tier" onClick={() => setModalShow(true)}>+</button>
        </div>
      </ul>
      <div className="tab-content">
        <NavContent name="FIT" target="fit" active={true}/>
        {/* <NavContent name="Agent" target="agent" active={false}/> */}
      </div>

      <ModalCompanyTour show={modalShow}
        text="Successfully saved data !!!"
        size="md" onHide={() => setModalShow(false)}
         />

    </>
  )
})
export default PriceInfo