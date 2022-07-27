import axios from 'axios';



const API_URL ='http://localhost:5000/api/auth/'

//Register user
const auth= async (userData,action) =>{
    const response = await axios.post(API_URL+action,userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

// const login = async (userData)=>{
//     const response = await axios.post(API_URL+"login/",userData)
//     if(response.data){
//         localStorage.setItem('user',JSON.stringify(response.data))
//     }
//     return response.data
// }


const authService = {
    auth,

}
export default authService
