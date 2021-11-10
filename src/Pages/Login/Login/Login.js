// import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';



import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert, } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';





const Login = () => {
    const [loginData, setLoginData] = useState()

    const { user, isLoading, authError, loginUser } = useAuth()

    const location = useLocation();
    const history = useHistory()

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    // login submit
    const handleLogInSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history)
    }


    return (
        <div>
            <Grid>
                <Navigation />
                <Container>
                    <Grid container spacing={2}>
                        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                            <Typography variant="body1" gutterBottom>
                                Login
                            <form onSubmit={handleLogInSubmit}>
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Email"
                                        name="email"
                                        onChange={handleOnChange}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Password"
                                        type="password"
                                        name="password"
                                        onChange={handleOnChange}
                                        autoComplete="current-password"
                                        variant="standard"
                                    />
                                    <Button sx={{ width: '75%', m: 1, background: '#009970' }} variant="contained" type="submit">LogIn</Button>

                                </form>
                                {isLoading && <CircularProgress />}
                                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}
                                <NavLink to="/register" style={{ textDecoration: 'none' }}><Button variant="text">
                                    New User? please  Registar</Button></NavLink>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>

                        </Grid>
                    </Grid>

                </Container>
            </Grid>
        </div >
    );
};

export default Login;