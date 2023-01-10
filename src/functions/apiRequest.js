import axios from "axios"

// axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.baseURL = "https://stepby-server-stepby.vercel.app"

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