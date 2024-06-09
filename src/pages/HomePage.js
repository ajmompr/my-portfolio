import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2">Welcome to My Portfolio</Typography>
          <Typography variant="body1">
            <Button component={Link} to="/about">About Me</Button>
            <Button component={Link} to="/projects">Projects</Button>
            <Button component={Link} to="/bookclub">Book Club!</Button>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="hero section image path" alt="hero section image place holder" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
