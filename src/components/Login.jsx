// src/components/Login.js
import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authentication";

export function Login() {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            navigate("/home");
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(Username, Password);
            localStorage.setItem("token", res.data.token);
            if (res) {
                navigate("/home");
            }
        } catch (error) {
            console.error(error);
        }
        console.log(Username, Password);
    }
    return (
        <Container>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                minHeight="100vh">
                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete=""
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }} >Login</Button>
                </form>
            </Box>
        </Container>
    );
}

export default Login;
