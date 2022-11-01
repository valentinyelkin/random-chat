import { Avatar, Button, Typography, Link } from '@mui/material';
import { useAuth} from "../../context/auth-context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form, Formik } from "formik";
import { initialValues, SignInUpSchema } from "../../utils/sigInUp-schema";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { FC } from "react";

interface AuthFormI {
    url: 'login' | 'register';
    title: string;
    logText: string;
}
export const AuthForm: FC<AuthFormI> = ({url, title, logText}): JSX.Element => {
    const { onLogin, onSignUp } = useAuth();
    const theme = createTheme();

    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{' '}{new Date().getFullYear()}{'.'}
            </Typography>
        );
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignInUpSchema}
            onSubmit={(values) => url === 'register' ? onLogin(values) : onSignUp(values)}>
            {(formik) => {
                const { errors, touched, isValid, dirty, values, handleChange } = formik;
                return (
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    p: 8,
                                    height: '100vh',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                </Avatar>
                                <Typography component="h1" variant="h5">{title}</Typography>
                                <Form>
                                    <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <TextField
                                            autoFocus
                                            margin="normal"
                                            required
                                            id="email"
                                            name="email"
                                            label="Email adress"
                                            value={values.email}
                                            onChange={handleChange}
                                            error={touched.email && Boolean(errors.email)}
                                            helperText={touched.email && errors.email}
                                        />
                                        <TextField
                                            margin="normal"
                                            autoFocus
                                            id="password"
                                            name="password"
                                            label="Password"
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            error={touched.password && Boolean(errors.password)}
                                            helperText={touched.password && errors.password}
                                        />
                                    </Box>

                                    <Button color="primary" variant="contained" type="submit" fullWidth>
                                        {title}
                                    </Button>
                                    {/*<button*/}
                                    {/*    type="submit"*/}
                                    {/*    className={!(dirty && isValid) ? "disabled-btn" : ""}*/}
                                    {/*    disabled={!(dirty && isValid)}*/}
                                    {/*>*/}
                                    {/*    Sign In*/}
                                    {/*</button>*/}
                                </Form>
                                <Grid container
                                      sx={{ justifyContent: 'center', m: '10px 0'}}>
                                    <Grid item>
                                        <Link href={`/${url}`} variant="body2">{logText}</Link>
                                    </Grid>
                                </Grid>

                                <Copyright sx={{ mt: 4, mb: 2 }} />
                            </Box>
                        </Container>
                    </ThemeProvider>
                );
            }}
        </Formik>
    );
};
