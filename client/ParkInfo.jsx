import React from 'react';
import Activity from './Activity.jsx';
import ParkImage from './ParkImage.jsx';
import Closure from './Closure.jsx';
const ParkInfo = ({park}) => {
  return (
    <div>
      <h3>{park.name}</h3>
      <p>{park.description}</p>
      {park.activities.map(activity => <Activity activity={activity} />)}
      {park.images.map(image => <ParkImage imageUrl={image} />)}
      {park.closures.map(closure => <Closure closure={closure} />)}
      <hr></hr>
      <hr></hr>
    </div>
  );
}

export default ParkInfo;