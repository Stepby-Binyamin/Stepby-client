import axios from "axios"

// axios.create({
//   baseURL: "http://localhost:5000"
// });

export const setToken = (token)=>{
    // when you do logout pass the parameter as an empty string

    axios.defaults.headers.common['Authorization'] =  token //AUTH_TOKEN
}
const apiCalls = async (url, method, data) => {
    let res;
    await axios({
        method,
        url,
        data, 
        baseURL:"http://localhost:5000" 
    })
        .then( async (response) => {
            res = response.data
        })
        .catch( (error) => {
            res = error.message
            throw error.message
        })
        return res
}

export default apiCalls