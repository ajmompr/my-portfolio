import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

const projects = [
  { id: 1, title: 'Project One', description: 'Description of project one', image: '' },
  { id: 2, title: 'Project Two', description: 'Description of project two', image: '' },
  { id: 3, title: 'Project Three', description: 'Description of project three', image: '' },
];

const ProjectsPage = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {projects.map(project => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
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
