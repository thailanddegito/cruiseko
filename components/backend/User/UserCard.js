
import React, { useEffect, useState } from 'react';
import Card from './Card'
import api from '../../../utils/api-admin'
import Slick from "react-slick";

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


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      }
    ]
  };


  return (
    <>
      <div className="row justify-content-start mb-3">
        <div className="col-6">
          <h4>Pending users</h4>
        </div>
      </div>
      <div className="mb-4">
        <Slick {...settings}>    
          {
            users.rows.map((val, index) => (
              <Card key={index} users={val} />
            ))
          }
        </Slick>
      </div>
    </>
  )
}
export default UserCard