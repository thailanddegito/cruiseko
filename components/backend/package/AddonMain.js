import React, {memo, useState} from 'react';
import Button from '../../widget/Button';
import AddAddons from './AddAddons';
import ShowAddon from './ShowAddons';

const AddonMain = memo((props) => {
  const {pkg,addons,setAddons} = props;
  const [show, setShow] = useState(false);
  const [editData,setEditData] = useState();
  // const [events, setEvent] = useState(false);

  // if(!pkg) return null;

  const handleShow = () => {
    setShow(true);
    if(editData) setEditData(null);
  }

  const handleClose = () => {
    setShow(false);
  }

  const addAddon = (item) =>{
    setAddons([...addons,item]);
  }

  const editAddon = (item) =>{
    var tmp = [...addons];
    tmp[item.index] = item;
    setAddons(tmp);
  }

  const handleDelete =(index) =>{
    var tmp = [...addons];
    tmp.splice(index,1)
    setAddons(tmp)
  }

  const handleClickEdit = (index) =>{
    setEditData({...addons[index],index})
    setShow(true);
  }

 

  return (
    <>
      <div className="row">
        <div className="col-12">
            <div className="text-right">
            {!show ?<Button _type="button" _name="Add" _class="btn-primary" _click={handleShow} /> :null}
            </div>
        </div>
      </div>

      {
        show ? (
            <>
              <div>
                  <AddAddons handleAddonSave={addAddon} handleClose={handleClose} editData={editData} addAddon={addAddon} editAddon={editAddon} />
              </div>
            </>
        ) : (
            <>
            <div>
                <ShowAddon data={addons} handleClickEdit={handleClickEdit} handleDelete={handleDelete} />
            </div>
            </>
        )
      }
      
    </>
  )
})
export default AddonMain