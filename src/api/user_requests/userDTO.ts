export interface UserDTO {
    id:	number;
    username:	string | null;
    email:	string;
    avatar:	string | null;
    banner: string | null;
}

export interface UpdatableUserFieldsDto {
    userName: string;
    email: string;
    password: string;
}

export interface SuccessDTO {
    success: string;
}
