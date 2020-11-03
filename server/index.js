require('dotenv').config()
const express = require('express');
const axios = require('axios');
const path = require('path');
const db = require('../DB/index.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/parks/:stateCode', (req, res) => {
  console.log(req.params.stateCode)
  db.getParksForState(req.params.stateCode)
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send();
  })
});

app.get('/closures', (req, res) => {
  axios({
    url: 'https://developer.nps.gov/api/v1/alerts',
    params: {
      api_key: 'hjJxUk9CvTRlbscNW9XWmpPMIZl4ciSsJ8C2XuPe',
      q: "Park Closure",
      limit: 2000
    }
  })
  .then(parks => {
    res.send(parks.data)
  })
  .catch(err => {
    console.error(err);
    res.status(500).send();
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})