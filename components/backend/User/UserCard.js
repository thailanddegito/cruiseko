
import React, { useEffect, useState } from 'react';
import Card from './Card'
import api from '../../../utils/api-admin'

const UserCard = (props) => {
  const [users, setUsers] = useState(false);

  const fecthUsers = () => {
    api.getUsers({user_type : 'partner', approve_status : 0})
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

  return (
    <>
      <div className="row">
        {
          users ? users.rows.map((val, index) => (
            <Card key={index} users={val} />
          )) : null
        }
      </div>
    </>
  )
}
export default UserCard