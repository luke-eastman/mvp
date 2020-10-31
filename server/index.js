require('dotenv').config()
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/parks', (req, res) => {
  axios({
    url: 'https://developer.nps.gov/api/v1/parks',
    params: {
      api_key: 'hjJxUk9CvTRlbscNW9XWmpPMIZl4ciSsJ8C2XuPe'
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