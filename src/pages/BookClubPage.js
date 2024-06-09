import React, { useState } from 'react';
import { Container, Button, Typography, Card, CardContent, CardMedia } from '@mui/material';

const bookRecommendations = {
  'Physical Health & Wellness': [
    { title: 'Health At Every Size', author: 'Lindo Bacon', image: 'path/to/image.jpg', link: 'https://www.amazon.com' },
    { title: 'Intuitive Eating', author: 'Evelyn Tribole & Elyse Resch', image: 'path/to/image.jpg', link: 'https://www.amazon.com' },
    { title: 'Body Respect', author: 'Lindo Bacon', image: 'path/to/image.jpg', link: 'https://www.amazon.com' }
  ],
  'Digital Minimalism': [
    { title: 'Digital Minimalism', author: 'Cal Newport', image: 'path/to/image.jpg', link: 'https://www.amazon.com' },
    { title: 'Deep Work', author: 'Cal Newport', image: 'path/to/image.jpg', link: 'https://www.amazon.com' },
    { title: 'A World Without Email', author: 'Cal Newport', image: 'path/to/image.jpg', link: 'https://www.amazon.com' },
    { title: 'Stolen Focus', author: 'Johann Hari', image: 'path/to/image.jpg', link: 'https://www.amazon.com' },
    { title: 'The Shallows', author: 'Nicholas Carr', image: 'path/to/image.jpg', link: 'https://www.amazon.com' },
    { title: 'Irresistible', author: 'Adam Alter', image: 'path/to/image.jpg', link: 'https://www.amazon.com' }
  ],
  'Self-Improvement': [
    { title: 'The Power of Now', author: 'Eckhart Tolle', image: 'path/to/image.jpg', link: 'https://www.amazon.com' },
    { title: 'Quarterlife', author: 'Satya Doyle Bock', image: 'path/to/image.jpg', link: 'https://www.amazon.com' },
    { title: 'How to Be an Imperfectionist', author: 'Stephen Guise', image: 'path/to/image.jpg', link: 'https://www.amazon.com' },
    { title: 'Atomic Habits', author: 'James Clear', image: 'path/to/image.jpg', link: 'https://www.amazon.com' }
  ]
};

const BookClubPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [book, setBook] = useState(null);

  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
    const books = bookRecommendations[topic];
    const randomBook = books[Math.floor(Math.random() * books.length)];
    setBook(randomBook);
  };

  const handleAnotherBook = () => {
    setSelectedTopic(null);
    setBook(null);
  };

  return (
    <Container>
      {!book ? (
        <>
          <Typography variant="h4" gutterBottom>Book Club!</Typography>
          <Button variant="contained" onClick={() => handleTopicSelection('Physical Health & Wellness')}>
            Physical Health & Wellness
          </Button>
          <Button variant="contained" onClick={() => handleTopicSelection('Digital Minimalism')}>
            Digital Minimalism
          </Button>
          <Button variant="contained" onClick={() => handleTopicSelection('Self-Improvement')}>
            Self-Improvement
          </Button>
        </>
      ) : (
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={book.image}
            alt={book.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {book.author}
            </Typography>
            <Button variant="contained" href={book.link} target="_blank">Buy on Amazon</Button>
            <Button variant="contained" onClick={handleAnotherBook}>Select Another Book?</Button>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default BookClubPage;
