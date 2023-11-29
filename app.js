
const express = require('express');
const axios = require('axios'); 

const app = express();
const port = 3000; 

app.set('view engine', 'ejs'); 


app.get('/', (req, res) => {
  res.render('index.ejs'); 
});


app.get('/jokes', async (req, res) => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
