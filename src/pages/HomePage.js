import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container className={styles.hero}>
       {/* TODO: Update margin */}
       <br></br>
      <div className={styles.heroText}>
        <Typography variant="h2">Hi 👋🏿 My name is Alex Mompremier!</Typography>
        <Typography variant="body1" className={styles.heroButtons}>
          {/* TODO: Add aboutme page at later time! */}
          {/* <Button component={Link} to="/about">About Me</Button> */}
          <Button component={Link} to="/projects">Projects</Button>
          <Button component={Link} to="/bookclub">Book Club!</Button>
        </Typography>
      </div>
      <img src="path/to/your/image.jpg" alt="Hero" className={styles.heroImage} />
    </Container>
  );
};

export default HomePage;
