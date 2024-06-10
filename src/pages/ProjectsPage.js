import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import styles from './ProjectsPage.module.css';

const projects = [
  { id: 1, title: 'Assignment #1', description: 'An interactive greeting program and random MadLib story generator using core JS principles!', image: '', url: 'https://amompremier-assignment-1.fly.dev/' },
  { id: 2, title: 'Assignment #3A', description: 'An interactive React app that allows users to create a dynamic MadLib story!', image: '', url: 'https://assignment-3-madlib-app.fly.dev/' },
  { id: 3, title: 'Assignment #3B', description: 'An interactive React app that allows users to create new colors with an RGB color blender!', image: '', url: 'https://assignment-3-color-app.fly.dev/' },
  { id: 4, title: 'Assignment #6', description: 'An interactive React app that displays CTA route information using parameterized styles and locally-scoped CSS rules!', image: '', url: 'https://assignment-6.fly.dev/' },
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
                <Button
                  size="small"
                  variant="contained"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
