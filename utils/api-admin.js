import axios from 'axios'
import AuthService from './AdminAuthService'
const BASE = `${process.env.HOST}/api`; 
const service = axios.create()

// axios.interceptors.response.use((response) => {
//     if(response.status === 401) {
//          alert("You are not authorized");
//     }
//     return response;
// }, (error) => {
//     if (error.response && error.response.data) {
//         return Promise.reject(error.response.data);
//     }
//     return Promise.reject(error.message);
// });

service.interceptors.request.use(function (config) {
    console.log('call api url2' ,config.url)
    if(typeof window == 'undefined'){
        // console.log('asda')
        return config;
    }
    const token = AuthService.getToken();
    //If logged in
     if (token && !config.headers.access_token) {
        //console.log('test1')
        config.headers.Authorization =  'bearer '+token;
     } 
     
     
     return config;
});

export default {
  //Payment
   baseUrl : BASE,
   getUsers : (params) => service.get(`${BASE}/users`,{params}),
   

}