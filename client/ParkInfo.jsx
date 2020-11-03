import React, {useState, useEffect} from 'react';

const ParkInfo = ({park}) => {
  return (
    <div>
      <h3>{park.name}</h3>
      <p>{park.description}</p>
      <hr></hr>
    </div>
  );
}

export default ParkInfo;