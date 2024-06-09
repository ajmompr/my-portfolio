import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import styles from './ProjectsPage.module.css';

const projects = [
  { id: 1, title: 'Project One', description: 'Description of project one', image: 'path/to/image1.jpg' },
  { id: 2, title: 'Project Two', description: 'Description of project two', image: 'path/to/image2.jpg' },
  { id: 3, title: 'Project Three', description: 'Description of project three', image: 'path/to/image3.jpg' },
];

const ProjectsPage = () => {
  return (
    <Container>
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
