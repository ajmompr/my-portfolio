import React, { useState } from 'react';
import styles from './BookClubPage.module.css';
import { Container, Button, Typography, Card, CardContent, CardMedia } from '@mui/material';

// Book recommendations object
const bookRecommendations = {
  // Create book-topic category & book array key-value
  'Physical Health & Wellness': [
    // TODO add image links & update amazon direct links to purchase!
    { title: 'Health At Every Size', author: 'Lindo Bacon', link: 'https://www.amazon.com' },
    { title: 'Intuitive Eating', author: 'Evelyn Tribole & Elyse Resch', link: 'https://www.amazon.com' },
    { title: 'Body Respect', author: 'Lindo Bacon', link: 'https://www.amazon.com' }
  ],
  'Digital Minimalism': [
    { title: 'Digital Minimalism', author: 'Cal Newport', link: 'https://www.amazon.com' },
    { title: 'Deep Work', author: 'Cal Newport', link: 'https://www.amazon.com' },
    { title: 'A World Without Email', author: 'Cal Newport', link: 'https://www.amazon.com' },
    { title: 'Stolen Focus', author: 'Johann Hari', link: 'https://www.amazon.com' },
    { title: 'The Shallows', author: 'Nicholas Carr', link: 'https://www.amazon.com' },
    { title: 'Irresistible', author: 'Adam Alter', link: 'https://www.amazon.com' }
  ],
  'Self-Improvement': [
    { title: 'The Power of Now', author: 'Eckhart Tolle', link: 'https://www.amazon.com' },
    { title: 'Quarterlife', author: 'Satya Doyle Bock', link: 'https://www.amazon.com' },
    { title: 'How to Be an Imperfectionist', author: 'Stephen Guise', link: 'https://www.amazon.com' },
    { title: 'Atomic Habits', author: 'James Clear', link: 'https://www.amazon.com' }
  ]
};

const BookClubPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [book, setBook] = useState(null);
  const [showAllBooks, setShowAllBooks] = useState(false);

  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
    const books = bookRecommendations[topic];
    // Using Math.random function to select a random book when a user selects a topic button
    const randomBook = books[Math.floor(Math.random() * books.length)];
    setBook(randomBook);
  };

  const handleAnotherBook = () => {
    // Call setSelected to generate another book recommendation for the user
    setSelectedTopic(null);
    setBook(null);
  };

  const handleSeeAllBooks = () => {
    setShowAllBooks(!showAllBooks);
  };

  return (
    <Container>
       {/* TODO: Update margin */}
       <br></br>
      {!book && !showAllBooks ? (
        <>
          <Typography variant="h4" gutterBottom>Book Club!</Typography>
          <Typography gutterBottom>Please select a category to receive a book recommendation from a list of my favorite reads!</Typography>
          <Button variant="contained" onClick={handleSeeAllBooks}>
            See All Books
          </Button><br></br><br></br>
          <Button variant="contained" onClick={() => handleTopicSelection('Self-Improvement')}>
            Self-Improvement
          </Button><br></br><br></br>
          <Button variant="contained" onClick={() => handleTopicSelection('Digital Minimalism')}>
            Digital Minimalism
          </Button><br></br><br></br>
          <Button variant="contained" onClick={() => handleTopicSelection('Physical Health & Wellness')}>
            Physical Health & Wellness
          </Button><br></br><br></br>
        </>
      ) : showAllBooks ? (
        <>
        <br></br>
          <Button variant="contained" onClick={handleSeeAllBooks}>
            Back to Categories
          </Button>
          {Object.keys(bookRecommendations).map((category) => (
            <div key={category}>
              <Typography variant="h5">{category}</Typography>
              <ul>
                {bookRecommendations[category].map((book, index) => (
                  <li key={index}>
                    <Card>
                      <CardMedia
    
                        height="140"
                        alt={book.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {book.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {book.author}
                        </Typography>
                        <Button variant="contained" href={book.link} target="_blank" className={styles.buyButton}>Buy on Amazon</Button>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      ) : (
        <Card>
          <CardMedia
            height="140"
            alt={book.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {book.author}
            </Typography>
            <Button variant="contained" href={book.link} target="_blank" className={styles.buyButton}>Buy on Amazon</Button>
            <Button variant="contained" onClick={handleAnotherBook} className={styles.anotherBookButton}>Select Another Book?</Button>
            <Button variant="contained" onClick={handleSeeAllBooks}>See All Books</Button>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default BookClubPage;
