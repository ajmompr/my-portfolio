import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container className={styles.hero}>
      <Typography variant="h3">Hi 👋🏿 My name is Alex Mompremier!</Typography>
      {/* TODO: Update margin */}
      <br></br>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <div className={styles.heroText}>
            <Typography variant="body1" className={styles.heroButtons}>
              {/* TODO: Add aboutme page at later time! */}
              {/* <Button component={Link} to="/about">About Me</Button> */}
              <Button component={Link} to="/projects">Projects</Button><br></br>
              <Button component={Link} to="/bookclub">Book Club!</Button>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="path/to/your/image.jpg" alt="Hero" className={styles.heroImage} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
