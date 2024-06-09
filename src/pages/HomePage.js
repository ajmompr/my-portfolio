import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.introText}> 
      <Typography variant="h3">Hi 👋🏿 My name is Alex Mompremier!</Typography>
      <Container className={styles.hero}>
        {/* TODO: Update margin */}
        <br></br>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className={styles.heroText}>
              {/* TODO: Add aboutme page at later time! */}
              {/* <Button component={Link} to="/about">About Me</Button> */}
              <Button component={Link} to="/projects" className={styles.projectButton}>Projects</Button><br></br>
              <Button component={Link} to="/bookclub" className={styles.bookClubButton}>Book Club!</Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="path/to/your/image.jpg" alt="Hero" className={styles.heroImage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
