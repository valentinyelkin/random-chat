import { AxiosPromise } from "axios";

import { Constants} from "../../utils/constants";
import {UserDTO} from "./userDTO";
import axiosInstance from '../../utils/axiosInstance';

export const authMe = (): AxiosPromise<UserDTO> => {
    return axiosInstance.get(
        `${Constants.HOST}${Constants.USER}${Constants.ME}`
    )
}

 //  TODO in feature i'll add logic for this api
export const authUpdate = (token) => {
    return axiosInstance.patch(
        `${Constants.HOST}${Constants.USER}${Constants.UPDATE}`,
        {
            username: "username",
            email: "email@gmail.com",
            password: "12345678"
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    ).then(console.log).catch(console.log);
}
