import {useState,useEffect} from 'react'
import '../styles/globals.css'
import Router from 'next/router'
import UserAuthService from '../utils/AuthService'
import AdminAuthService from '../utils/AdminAuthService'
import api from '../utils/api'
import apiAdmin from '../utils/api-admin'
import { UserProvider } from '../contexts/UserContext';

function MyApp({ Component, pageProps }) {
  const [state,setState] = useState({
    user : null
  })

  const [admin,setAdmin] = useState( {data : null,fetching : false,isLogin:false});

  useEffect(()=>{
    // var user , admin;
    var pathname = Router.pathname
    const regex_backend = /backend/
    if(!regex_backend.test(pathname) && UserAuthService.isLoggin()){
      fetchUser()
    }
    // if(user || admin) setState({...state,user,admin})
    
    // const regex2 = /forgot-password|change-password/
      
    if(regex_backend.test(pathname) ){
      if(AdminAuthService.isLoggin()){
        fetchAdmin()
        if(/backend\/login/.test(pathname)) Router.push('/backend')
      }
      else{
        Router.push('/backend/login')
      }
      // alert('aa')
      
      // window.location= '/login'
    }
    

  },[])

  const fetchUser = async () =>{
    var user;
    return api.getProfile().then(res => {
      user = res.data;
      setState({...state,user})
    })
    .catch(err => {
      console.log(err)
      console.log(err.response)
    })
  }

  const fetchAdmin = async ()=>{
    var user;
    setAdmin({fetching : true,...admin})
    return apiAdmin.getAdminProfile().then(res => {
      user = res.data;
      setAdmin({fetching: false,data : user,isLogin:true})
    })
    .catch(err => {
      setAdmin({...admin,fetching: false})
      if(err.response?.data.error === 'UnauthorizedError'){
        AdminAuthService.logout()
        window.location = '/backend/login'
      }
      console.log(err)
      console.log(err.response)
    })
  }


  return (
    <UserProvider value={{...state,admin,fetchUser,fetchAdmin}} >
      <Component {...pageProps} />
    </UserProvider>
    
  )
}

export default MyApp
