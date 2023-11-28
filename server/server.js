const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB Atlas
// Replace <username>, <password>, and <dbname> with your actual MongoDB Atlas username, password, and database name
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// Define a simple schema
const ItemSchema = new mongoose.Schema({ name: String, text: String });
const Item = mongoose.model('Item', ItemSchema);

// Define a route to get an item by name
app.get('/items/:name', async (req, res) => {
  const item = await Item.findOne({ name: req.params.name });
  res.json(item);
});

// Start the server
app.listen(5000, () => console.log('Server started on port 5000'));