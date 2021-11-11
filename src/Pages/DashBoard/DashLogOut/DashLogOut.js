import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const DashLogOut = () => {
    const { logOut } = useAuth()
    return (
        <div>
            <h1>Log Out</h1>
            <Button onClick={logOut}>Click For Log Out</Button>
        </div>
    );
};

export default DashLogOut;