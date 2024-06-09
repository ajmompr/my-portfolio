import React, { useState } from 'react';
import { Container, Button, Typography, Card, CardContent, CardMedia } from '@mui/material';

// Book recommendations object
const bookRecommendations = {
  // Create book-topic category & book array key-value
  'Physical Health & Wellness': [
    // TODO add image links & update amazon direct links to purchase!
    { title: 'Health At Every Size', author: 'Lindo Bacon', image: '', link: 'https://www.amazon.com' },
    { title: 'Intuitive Eating', author: 'Evelyn Tribole & Elyse Resch', image: '', link: 'https://www.amazon.com' },
    { title: 'Body Respect', author: 'Lindo Bacon', image: '', link: 'https://www.amazon.com' }
  ],
  'Digital Minimalism': [
    { title: 'Digital Minimalism', author: 'Cal Newport', image: '', link: 'https://www.amazon.com' },
    { title: 'Deep Work', author: 'Cal Newport', image: '', link: 'https://www.amazon.com' },
    { title: 'A World Without Email', author: 'Cal Newport', image: '', link: 'https://www.amazon.com' },
    { title: 'Stolen Focus', author: 'Johann Hari', image: '', link: 'https://www.amazon.com' },
    { title: 'The Shallows', author: 'Nicholas Carr', image: '', link: 'https://www.amazon.com' },
    { title: 'Irresistible', author: 'Adam Alter', image: '', link: 'https://www.amazon.com' }
  ],
  'Self-Improvement': [
    { title: 'The Power of Now', author: 'Eckhart Tolle', image: '', link: 'https://www.amazon.com' },
    { title: 'Quarterlife', author: 'Satya Doyle Bock', image: '', link: 'https://www.amazon.com' },
    { title: 'How to Be an Imperfectionist', author: 'Stephen Guise', image: '', link: 'https://www.amazon.com' },
    { title: 'Atomic Habits', author: 'James Clear', image: '', link: 'https://www.amazon.com' }
  ]
};

const BookClubPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [book, setBook] = useState(null);

  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
    const books = bookRecommendations[topic];
    // Using Math.random fucntion to select random book when user selects a topic button
    const randomBook = books[Math.floor(Math.random() * books.length)];
    setBook(randomBook);
  };

  const handleAnotherBook = () => {
    // Call setSelected to generate another book recommendation for the user
    setSelectedTopic(null);
    setBook(null);
  };

  return (
    <Container>
      {!book ? (
        <>
          <Typography variant="h4" gutterBottom>Book Club!</Typography>
          <Typography variant="p" gutterBottom>Please select a category to receive a book recommendation from a list of my favorite reads!</Typography><br></br>
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
