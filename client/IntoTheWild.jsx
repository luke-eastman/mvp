import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';
import axios from 'axios';
import ParksList from './ParksList.jsx';

const Container = styled.div `
  width: 1000px;
  position: absolute;
  left: 100px;
  box-shadow: 5px 5px 200px 5px #888888;
`;

const IntoTheWild = () => {

  const [location, setLocation] = useState('AL');
  const [parks, setParks] = useState([]);
  const [closures, setClosures] = useState([]);
  const [parksWithClosures, setParksWithClosures] = useState([]);
  useEffect(() => {
    axios({
      url: '/closures',
      method: 'get'
    })
    .then(result => {
      setClosures(result.data.data);
    })
  }, [])

  useEffect(() => {
    axios({
      method: 'get',
      url: `/parks/${location}`,
    })
    .then(result => {
      setParks(result.data)
    });
  }, [location])

  useEffect(() => {
    var parksWithClosed = [];
    for (var j = 0; j < parks.length; j++) {
      var park = parks[j];
      park.closures = [];
      for (var i = 0; i < closures.length; i++) {
        if (closures[i].parkCode === park.parkCode) {
          console.log(park.parkCode)
          park.closures.push(closures[i]);
        }
      }
      console.log(park.closures)
      parksWithClosed.push(park);
    }
    setParksWithClosures(parksWithClosed);
  }, [closures, parks])

  return (
    <Container>
      <Search setLocation={setLocation} />
      <ParksList parks={parksWithClosures}/>
    </Container>
  );
}

export default IntoTheWild;