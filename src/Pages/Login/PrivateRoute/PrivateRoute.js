import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    if (isLoading) { return <CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;