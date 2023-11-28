const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://michael-daza:<password>@cluster0.ig2oprr.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// Define a simple schema
const ItemSchema = new mongoose.Schema({ name: String, text: String });
const Item = mongoose.model('3dObjects', ItemSchema);

// Define a route to get an item by name
app.get('/3dObjects/:name', async (req, res) => {
  const item = await Item.findOne({ name: req.params.name });
  res.json(item);
});

// Start the server
app.listen(5000, () => console.log('Server started on port 5000'));
