const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql=require("mysql2");
const cors=require("cors");
const jwt = require('jsonwebtoken');
const app = express();
const port = 5000; // Change the port as needed





app.use(bodyParser.json());
app.use(cors());


// Replace this with a proper database for user storage
const users = [];
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'Sa1$####',
  database: 'User', 
});
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});


const jwtSecretKey = '1234'; // Replace with a secure secret key

app.post('/api/Signup', async (req, res) => {
  try {
    const { name, email, password, address, gender } = req.body;
    
    // Hash the user's password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      'INSERT INTO users (`name`, `email`, `password`, `address`, `gender`) VALUES (?, ?, ?, ?, ?)',
      [name, email, hashedPassword, address, gender],
      (err, results) => {
        if (err) {
          console.error('MySQL error:', err);
          return res.status(500).json({ message: 'Signup failed' });
        }

        // Rest of your code for checking if the user already exists and responding to the client
        const userExists = users.some((user) => user.name === name || user.name===email);

        if (userExists) {
          return res.status(400).json({ message: 'User already exists' });
        }

        const user = { name, email, password: hashedPassword, address, gender };
        users.push(user);

        res.status(201).json({ message: 'Signup successful'});
      }
    );
  } catch (error) {
    console.error('Error during signup', error);
    res.status(500).json({ message: 'Signup failed' });
  }
});


app.post('/api/Login', async (req, res) => {
  try {
    const { name, password } = req.body;
    db.query('SELECT * FROM users WHERE name = ?', [name], async (err, results) => {
      if (err) {
        console.error('MySQL error:', err);
        return res.status(500).json({ message: 'Login failed' });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: 'Login failed: User not found' });
      }

      const user = results[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Login failed: Invalid password' });
      }

      const token = jwt.sign({ name: user.name }, jwtSecretKey, { expiresIn: '20s' });
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
