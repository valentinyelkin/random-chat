import axios from "axios";
import {Constants} from "./constants";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import {authRefresh} from "../api/auth_requests/ayth-requests";

const axiosInstance = axios.create({
    baseURL: Constants.HOST,
});

axiosInstance.interceptors.request.use(async (req) => {
    const token = JSON.parse(localStorage.getItem('token'));
    req.headers.Authorization = `Bearer ${token.accessToken}`;

    const decodedToken = jwt_decode(token.accessToken)
    // @ts-ignore
    const isExpired = dayjs.unix(decodedToken.exp).diff(dayjs()) < 1;
    console.log('isExpired: ', isExpired);

    if (!isExpired) return req;
    const response = await authRefresh(token.refreshToken);
    localStorage.setItem('token', JSON.stringify(response.data))
    req.headers.Authorization = `Bearer ${response.data.accessToken}`;

    return req;
})


export default axiosInstance;
