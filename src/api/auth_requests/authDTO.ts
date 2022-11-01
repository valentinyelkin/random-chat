export interface AuthDTO {
    email: string;
    password: string;
}

export interface TokenDTO {
    "accessToken": string,
    "refreshToken": string
}
