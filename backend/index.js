const express = require('express')
const { MongoClient } = require('mongodb')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
const cors = require('cors')
require('dotenv').config();
const uri = process.env.MONGODB_URI;

dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.json('hello world')
})


app.post('/api/remedies', async (req, res) => {
    const { title, description, disease } = req.body;
  
    try {
      const newRemedy = new Remedy({ title, description, disease });
      await newRemedy.save();
      res.status(201).json({ message: 'Remedy posted successfully', remedy: newRemedy });
    } catch (error) {
      console.error('Error posting remedy:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });


  app.get('/api/remedies', async (req, res) => {
    const { disease } = req.query; // Get disease filter from query parameters
  
    try {
      const query = disease ? { disease } : {};
      const remedies = await Remedy.find(query);
      res.status(200).json(remedies);
    } catch (error) {
      console.error('Error fetching remedies:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  app.post('/bookmarks', async (req, res) => {
    const { name, userId } = req.body;
    try {
      const newBookmark = new Bookmark({ name, userId });
      await newBookmark.save();
      res.status(201).json(newBookmark);
    } catch (error) {
      console.error('Error adding bookmark:', error);
      res.status(400).json({ error: error.message });
    }
  });

  app.get('/bookmarks/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
      const bookmarks = await Bookmark.find({ userId });
      res.status(200).json(bookmarks);
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
      res.status(400).json({ error: error.message });
    }
  });

  




// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});