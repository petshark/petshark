import axios from "axios";

const instance = axios.create({
    baseURL: "/api"
});

instance.interceptors.request.use(
    (config) => {
        const basicAuthCredentials = process.env.BACKEND_USER_USERNAME + ":" + process.env.BACKEND_USER_PASSWORD;
        config.headers.common["Authorization"] = "Basic " + basicAuthCredentials;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;