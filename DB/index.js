const mongoose = require('mongoose');
const axios = require('axios');

require('dotenv').config()

mongoose.connect('mongodb://localhost/parks', {useNewUrlParser: true, useUnifiedTopology: true});

const parkSchema = new mongoose.Schema({
  id: String,
  name: String,
  states: [String],
  parkCode: String,
  description: String,
  latitude: String,
  longitude: String,
  url: String,
  activities: [String],
  cost: String,
  images: [String]
})
const Park = mongoose.model('Park', parkSchema);

const getParksForState = (stateCode) => {
  return new Promise ((resolve, reject) => {
    Park.find({
      states: stateCode
    }).exec((err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  });
}

module.exports.getParksForState = getParksForState;


// axios({
//   url: 'https://developer.nps.gov/api/v1/parks',
//   params: {
//     api_key: process.env.NP_API_KEY,
//     limit: 500,
//   }

// })
// .then(parks => {
//   parks = parks.data.data
//   for (var i = 0; i < parks.length; i++) {
//     var images = [];
//     for (var j = 0; j < parks[i].images.length; j++) {
//       images.push(parks[i].images[j].url)
//     }
//     var activities = [];
//     for (var j = 0; j < parks[i].activities.length; j++) {
//       activities.push(parks[i].activities[j].name)
//     }
//     console.log(parks[i].latitude)
//     Park.create({
//       id: parks[i].id,
//       name: parks[i].fullName,
//       states: parks[i].states.split(','),
//       parkCode: parks[i].parkCode,
//       description: parks[i].description,
//       latitude: parks[i].latitude,
//       longitude: parks[i].longitude,
//       images: images,
//       activities: activities
//     })
//     console.log(parks[i].fullName)
//   }
// })
// .catch(err => {
//   console.error(err);
// })