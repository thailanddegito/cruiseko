import React,{useState, memo} from 'react';
import ModalCompanyTier from './ModalCompanyTier';
import NavHeader from './NavHeader';
import NavContent from './NavContent';

const PriceInfo = memo((props) => {
  const {name, data, type, handlePriceChange,addUserType,handleTierStartChange,handleAddTier} = props;
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
          <NavContent name={val.name} 
          key={index}
          target={val.name} 
          data={val}
          handlePriceChange={handlePriceChange}
          handleTierStartChange={handleTierStartChange}
          handleAddTier={handleAddTier}
          active={index === 0}/>
        ) ) }
        {/* <NavContent name="Agent" target="agent" active={false}/> */}
      </div>

      <ModalCompanyTier show={modalShow}
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