import * as React from 'react';
import { AuthForm } from "../src/components/AuthForm/AuthForm";

const Login = (): JSX.Element => {
    return (
        <AuthForm title='Sign in' logText="Don't have an account? Sign Up" url='register' />
    );
};

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    };
}

export default Login;
