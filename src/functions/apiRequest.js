import axios from "axios"
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
console.log("🚀 ~ file: apiRequest.js:3 ~  process.env.REACT_APP_BASE_URL",  process.env.REACT_APP_BASE_URL)

export const setToken = (token) => {
    // when you do logout pass the parameter as an empty string
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}` //AUTH_TOKEN
}

const apiCalls = async (method, url, data) => {
    console.log(" +++  \n api call - send ", method, url, data);
    try {
        const res = await axios({
            headers: {
                'Authorization': localStorage.token ? `Bearer ${localStorage.token}` : ''
            },
            method,
            url,
            data
        })
        console.log(" +++  \n api call - res", res.data);
        return res.data
    }
    catch (error) {
        console.log(" +++  \n api call - error", error);
        throw error
    }
}
export default apiCalls