import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
import axios from 'axios';
import ParksList from './ParksList.jsx';

const IntoTheWild = () => {
  const [hello, setHello] = useState('hello123');
  const [location, setLocation] = useState('AL');
  const [parks, setParks] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: `/parks/${location}`,
    })
    .then(result => {
      setParks(result.data)
    });
  }, [location])


  return (
    <div>
      <Search setLocation={setLocation} />
      <ParksList parks={parks}/>
    </div>
  );
}

export default IntoTheWild;