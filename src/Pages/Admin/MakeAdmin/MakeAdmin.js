import React, { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleAdminSubmit = (e) => {
        const user = { email }
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    type="email"
                    onBlur={handleOnBlur}
                    id="standard-basic"
                    label="Email"
                    variant="standard" />
                <Button variant="contained" type="submit">Make An Admin</Button>
                {success && <Alert severity="success">Made Admin Successfully</Alert>}
            </form>
        </div>
    );
};

export default MakeAdmin;