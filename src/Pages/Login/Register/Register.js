import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import { Grid, Container, TextField, Button, Typography, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState()

    const { registerUser, isLoading, user, authError } = useAuth()

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    // login submit
    const handleLogInSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your pass not match')
            return
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Grid>
            <Navigation />
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>
                            Register
                            {!isLoading && <form onSubmit={handleLogInSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Name"
                                    name="name"
                                    type="text"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    type="email"
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
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Retupe Your Password"
                                    type="password"
                                    name="password2"
                                    onChange={handleOnChange}
                                    autoComplete="current-password"
                                    variant="standard"
                                />

                                <Button sx={{ width: '75%', m: 1, background: '#009970' }} variant="contained" type="submit">
                                    Register </Button>

                                <NavLink to="/login" style={{ textDecoration: 'none' }}><Button variant="text">
                                    Already Register please Login</Button></NavLink>
                            </form>}
                        </Typography>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                </Grid>

            </Container>
        </Grid >
    );
};

export default Register;