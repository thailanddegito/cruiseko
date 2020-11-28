import axios from 'axios'
import AuthService from './AuthService'
const BASE = `${process.env.HOST}/api`; 
const service = axios.create({baseURL :'/api' })

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
    // console.log('call api url1' ,config.url)
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
   login : (data) => service.post(`/users/login`,data),
   getProfile : () => service.get(`/users/profile`),
   genUserId : (data) => service.post(`/users/gen-id`,data),
   checkEmail : (data) => service.post(`/users/check-email`,data),
   register : (data) => service.post(`/users/register`,data),

    //Company Type
    getCompany : (params) => service.get(`/backend/company-type`, {params}),

    //Package
    getPackage : (params) => service.get(`/products`, {params}),
    getPackageOne : (id) => service.get(`/products/${id}`),
    checkout : (data) => service.post(`/booking`,data),

    //Activities
    getActivities : (params) => service.get(`/boat-category`, {params}),

}