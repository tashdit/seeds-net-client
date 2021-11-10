// import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';



import { Container, Grid, Typography, TextField, Button, } from '@mui/material';
import { NavLink } from 'react-router-dom';





const Login = () => {



    return (
        <div>
            <Grid>
                <Navigation />
                <Container>
                    <Grid container spacing={2}>
                        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                            <Typography variant="body1" gutterBottom>
                                Login
                            <form >
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Email"
                                        name="email"

                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Password"
                                        type="password"
                                        name="password"

                                        autoComplete="current-password"
                                        variant="standard"
                                    />
                                    <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">LogIn</Button>

                                </form>
                                <p>---------------------------</p>
                                <NavLink to="/register" style={{ textDecoration: 'none' }}><Button variant="text">
                                    New User? please  Registar</Button></NavLink>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>

                        </Grid>
                    </Grid>

                </Container>
            </Grid>
        </div>
    );
};

export default Login;