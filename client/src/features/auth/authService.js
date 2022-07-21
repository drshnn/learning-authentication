import axios from 'axios';



const API_URL ='http://localhost:5000/api/auth/'

//Register user
const register = async (userData) =>{
    const response = await axios.post(API_URL+'register/',userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const authService = {
    register

}
export default authService
