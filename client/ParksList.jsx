import React from 'react';
import ParkInfo from './ParkInfo.jsx';

const ParksList = ({parks}) => {
  return (
    <div>
      {parks.map(park => <ParkInfo park={park} key={park.id}/>)}
    </div>
  );
}

export default ParksList;