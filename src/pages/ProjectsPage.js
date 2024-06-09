import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

const projects = [
  { id: 1, title: 'Assignment One', description: 'An interactive greeting program and random MadLib story generator using core JS principles!', image: '' },
  { id: 2, title: 'Assignment Three', description: 'An interactive React app that allows users to create a dynamic MadLib story & RGB color blender!', image: '' },
  { id: 3, title: 'Assignment Six', description: 'Description of project three', image: '' },
];

const ProjectsPage = () => {
  return (
    <Container>
      {/* TODO: Not kosher/good practice to use break; add margin to container */}
      <br></br>
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
