import axios from "axios"

axios.defaults.baseURL = "http://localhost:5000"

export const setToken = (token) => {
    // when you do logout pass the parameter as an empty string
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}` //AUTH_TOKEN
}


const apiCalls = async (method, url, data) => {

    console.log("api call", method, url, data);
    try {
        const res = await axios({
            headers: {
                'Authorization': localStorage.token ? `Bearer ${localStorage.token}` : ''
            },
            method,
            url,
            data
        })

        console.log("api call res", res.data);
        return res.data
    }

    catch (error) {

        console.log("api call error", error);
        throw error
    }
}

export default apiCalls