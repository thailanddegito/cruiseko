import React,{useState, memo} from 'react';
import ModalCompanyTour from './ModalCompanyTour';
import NavHeader from './NavHeader';
import NavContent from './NavContent';

const PriceInfo = memo((props) => {
  const {name, data, type, handlePriceChange,addUserType} = props;
  const [modalShow, setModalShow] = useState(false);
  const [countUser, setCountUser] = useState(false);


  return (
    <>
      <ul className="nav nav-tabs">
        {data.map((val,index) => <NavHeader key={index} name={val.name} target={val.name} active={index === 0}/> ) }
        {
          countUser ? (
            <div>
              <button type="button" className="btn-add-tier" onClick={() => setModalShow(true)}>+</button>
            </div>
          ) : null
        }
       
      </ul>
      <div className="tab-content">
        {data.map((val,index) => (
          <NavContent key={index}
          name={val.name} 
          target={val.name} 
          price_list={val.price_list}
          handlePriceChange={handlePriceChange}
          active={index === 0}/>
        ) ) }
        {/* <NavContent name="FIT" target="fit" active={true}/> */}
        {/* <NavContent name="Agent" target="agent" active={false}/> */}
      </div>

      <ModalCompanyTour show={modalShow}
        addUserType={addUserType}
        user_list={data.map(val => val.id)}
        text="Successfully saved data !!!"
        size="md" onHide={() => setModalShow(false)}
        setCountUser={setCountUser} countUser={countUser}
      />

    </>
  )
})
export default PriceInfo