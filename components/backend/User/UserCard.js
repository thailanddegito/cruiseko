
import React, { useEffect, useState } from 'react';
import Card from './Card'
import api from '../../../utils/api-admin'

const UserCard = (props) => {
  const [users, setUsers] = useState(false);

  const fecthUsers = () => {
    api.getUsers({user_type : 'partner', approve_status : 0, limit : 4})
    .then(res=>{
      const data = res.data;
      setUsers(data);
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
    })
  }

  useEffect(() => {
    fecthUsers();
  },[]);
  
  if(!users) {
    return null;
  }
  if(!users.count) {
    return null;
  }

  return (
    <>
      <div className="row justify-content-start mb-3">
        <div className="col-6">
          <h4>Pending users</h4>
        </div>
      </div>
      <div className="row mb-4">
        {
          users.rows.map((val, index) => (
            <Card key={index} users={val} />
          ))
        }
      </div>
    </>
  )
}
export default UserCard