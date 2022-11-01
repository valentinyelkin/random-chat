import axios, { AxiosPromise } from "axios";
import { Constants } from "../../utils/constants";
import { AuthDTO } from "./authDTO";

export const authSignUp = (userCred: AuthDTO): AxiosPromise => {
    return axios.post(
        `${Constants.HOST}${Constants.AUTH}${Constants.SIGN_UP}`,
        userCred,
    );
}

export const authSignIn = (userCred: AuthDTO): AxiosPromise => {
   return axios.post(
        `${Constants.HOST}${Constants.AUTH}${Constants.SIGN_IN}`,
       userCred,
    );
}

export const authRefresh = (refreshToken): AxiosPromise => {
    return axios.post(
        `${Constants.HOST}${Constants.AUTH}${Constants.REFRESH}`,
        {
            refreshToken,
        },
    );
}
