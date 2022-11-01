import * as React from 'react';
import { AuthForm } from "../src/components/AuthForm/AuthForm";

const Register = (): JSX.Element => {
    return (
        <AuthForm title='Sign Up' logText="Have an account? Log in" url='login'/>
    );
};

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    };
}

export default Register;
