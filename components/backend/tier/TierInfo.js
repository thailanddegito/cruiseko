import React,{useState, memo} from 'react';
import TierData from './TierData';
import ModalCompanyTier from './ModalCompanyTier';

const PriceInfo = memo((props) => {
  const {name, data, type, handlePriceChange} = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#fit">FIT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#agent">Agent</a>
        </li>
        <div>
          <button onClick={() => setModalShow(true)}>+</button>
        </div>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="fit">
          <TierData />
        </div>
      </div>

      <ModalCompanyTier show={modalShow}
        text="Successfully saved data !!!"
        size="md" onHide={() => setModalShow(false)}
         />

    </>
  )
})
export default PriceInfo