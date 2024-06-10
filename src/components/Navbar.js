import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My React Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/" className={styles.navButton}>Home</Button>
        <Button color="inherit" component={Link} to="/projects" className={styles.navButton}>Projects</Button>
        <Button color="inherit" component={Link} to="/bookclub" className={styles.navButton}>Book Club!</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
