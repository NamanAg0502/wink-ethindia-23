import express from 'express';
import bodyparser from 'body-parser';
import { authenticateUserRole } from './middleware/role.middleware.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyparser.json());

// Sample route for each user role
app.get(
  '/pet-organization',
  authenticateUserRole('Pet Organization'),
  (req, res) => {
    res.json({ message: 'Welcome to the Pet Organization section.' });
  }
);

app.get('/adopters', authenticateUserRole('Adopters'), (req, res) => {
  res.json({ message: 'Welcome to the Adopters section.' });
});

app.get('/care-giver', authenticateUserRole('Care Giver'), (req, res) => {
  res.json({ message: 'Welcome to the Care Giver section.' });
});

// Start the server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
