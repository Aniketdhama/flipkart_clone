// we have install a package "axios" to fetch a api 

import axios  from 'axios'
//url in which back end is running 
const URL='http://localhost:8000';

export const authenticatesignup=async(data)=>{
    try{
        return await axios.post(`${URL}/signup`,data)
    }
    catch(error){
        console.log('error occured while fetching signup api',error.message)
    }
}

//apii for loginn
export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response
    }
}

export const payUsingPaytm=async(data)=>{
    try{
       let response= await axios.post(`${URL}/payment`,data)
       return response.data
    }catch(error){
        console.log('Error while calling paytm api')
    }
}

 