import api from './api'

export default class AuthService{
    
    static isLoggin = ()=>{
        // Checks if there is a saved token and it's still valid
        const token = this.getToken()
        return !!token 
    }

    // static setProfile = profile =>{
    //     // Saves profile data to localStorage
    //     localStorage.setItem('profile', JSON.stringify(profile))
    // }
    
    // static getProfile = ()=>{
    //     // Retrieves the profile data from localStorage
    //     const profile = localStorage.getItem('profile')
    //     return profile ? JSON.parse(profile) : null
    // }
    
    static setToken =token =>{
        // Saves user token to localStorage
        localStorage.setItem('token_x', token)
    }
    
    static getToken = ()=>{
        // Retrieves the user token from localStorage
        return localStorage.getItem('token_x')
    }
    
    static logout = () =>{
        // Clear user token and profile data from localStorage
        localStorage.removeItem('token_x');
        // localStorage.removeItem('profile');
    }

}

