const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sa1$####',
  database: 'Mma',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

const jwtSecretKey = '1234';
app.post('/api/Signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input data
    if (!email || !password) {
      return res.status(400).json({ message: 'Invalid input data' });
    }

    // Check if the email is already in use
    db.query('SELECT * FROM users WHERE email = ?', [email], async (selectErr, selectResults) => {
      if (selectErr) {
        console.error('MySQL error:', selectErr);
        return res.status(500).json({ message: 'Signup failed' });
      }

      if (selectResults.length > 0) {
        // Email already exists
        return res.status(409).json({ message: 'Email already in use' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user data into the database
      db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (insertErr, insertResults) => {
        if (insertErr) {
          console.error('MySQL error:', insertErr);
          return res.status(500).json({ message: 'Signup failed' });
        }
        res.status(201).json({ message: 'Signup successful' });
      });
    });
  } catch (error) {
    console.error('Error during signup', error);
    res.status(500).json({ message: 'Signup failed' });
  }
});


app.post('/api/Login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input data
    if (!email || !password) {
      return res.status(400).json({ message: 'Invalid input data' });
    }

    // Check if the user exists in the database
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) {
        console.error('MySQL error:', err);
        return res.status(500).json({ message: 'Login failed' });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: 'Login failed: User not found' });
      }

      // Compare the hashed password with the input password
      const user = results[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Login failed: Invalid password' });
      }

      // Generate and send a JWT token
      const token = jwt.sign({ email: user.email }, jwtSecretKey, { expiresIn: '20s' });
      res.json({ message: 'Login successful', token });
    });
  } catch (error) {
    console.error('Error during login', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
