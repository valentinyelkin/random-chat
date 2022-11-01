import * as Yup from "yup";

export const SignInUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too short - should be 6 chars minimum"),
});

export const initialValues = {
    email: "",
    password: ""
};
