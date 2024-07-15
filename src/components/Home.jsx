import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchCustomerData } from "../api/customer";

const Home = () => {
    const [customerData, setCustomerData] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            console.log("ads");
            navigate("/login");
        } else {
            fetchData();
        }
    }, [token]);
    const fetchData = async () => {
        try {
            const res = await fetchCustomerData(token);
            setCustomerData(res);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Grid container spacing={3}>
                {customerData.map((customer) => (
                    <Grid item key={customer.id} xs={12} sm={6} md={4}>
                        <Box p={2} bgcolor="background.paper" boxShadow={2}>
                            <Typography variant="h5">{customer.name}</Typography>
                            <Typography variant="body1">Email: {customer.email}</Typography>
                            <Typography variant="body1">Phone: {customer.phone}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
