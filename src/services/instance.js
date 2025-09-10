import axios from "axios";

const baseURL = "https://notes-backend-f3bj.onrender.com/api/v1";

const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    withCredentials: true
})

export default instance