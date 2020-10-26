import {useState,useEffect} from 'react'
import '../styles/globals.css'
import UserAuthService from '../utils/AuthService'
import AdminAuthService from '../utils/AdminAuthService'
import api from '../utils/api'
import { UserProvider } from '../contexts/UserContext';

function MyApp({ Component, pageProps }) {
  const [state,setState] = useState({
    user : null
  })

  useEffect(()=>{
    // var user , admin;
    if(UserAuthService.isLoggin()){
      fetchUser()
    }
    // if(user || admin) setState({...state,user,admin})


  },[])

  const fetchUser = () =>{
    var user;
    api.getProfile().then(res => {
      user = res.data;
      setState({...state,user})
    })
    .catch(err => {
      console.log(err)
      console.log(err.response)
    })
  }


  return (
    <UserProvider value={{...state,fetchUser}} >
      <Component {...pageProps} />
    </UserProvider>
    
  )
}

export default MyApp
