import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { login } from '../api/authentication';
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
    const isLoggedIn = localStorage.getItem('token');
    const navigate = useNavigate();
    const handleLoginIn = async () => {
        navigate('/login');
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Customer Management
                    </Typography>
                    {isLoggedIn ? (
                        <Button color="inherit" onClick={handleLogout}>Log out</Button>) :
                        <Button color="inherit" onClick={handleLoginIn}>Log in</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}