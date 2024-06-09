import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          My Portfolio
        </Typography>
        <Button className={styles.linkButton} component={Link} to="/">Home</Button>
        <Button className={styles.linkButton} component={Link} to="/projects">Projects</Button>
        <Button className={styles.linkButton} component={Link} to="/bookclub">Book Club!</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
