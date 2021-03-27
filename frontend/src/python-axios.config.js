import axios from "axios";

const instance = axios.create({
    baseURL: process.env.PYTHON_BASE_URL
});

export default instance;
