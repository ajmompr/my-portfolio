import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import avatarImage from '../images/avatar.png';


const HomePage = () => {
  return (
    <div className={styles.introContainer}> 
      <Typography variant="h1" className={styles.introText}>Hi 👋🏿 My name is Alex Mompremier!</Typography>
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
            <img src={avatarImage} alt="Hero" className={styles.heroImage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
