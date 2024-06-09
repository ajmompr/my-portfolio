import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import styles from './ProjectsPage.module.css';

const projects = [
  { id: 1, title: 'Assignment #1', description: 'An interactive greeting program and random MadLib story generator using core JS principles!', image: '' },
  { id: 2, title: 'Assignment #3', description: 'An interactive React app that allows users to create a dynamic MadLib story & RGB color blender!', image: '' },
  { id: 3, title: 'Assignment #6', description: 'An interactive React app that displays CTA route information using parameterized styles and locally-scoped CSS rules!', image: '' },
];

const ProjectsPage = () => {
  return (
    <Container>
      {/* TODO: Update margin */}
      <br></br>
      <Grid container spacing={4}>
        {projects.map(project => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card className={styles.card}>
              <CardMedia
                className={styles.media}
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions className={styles.cardActions}>
                <Button size="small" variant="contained">See More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
