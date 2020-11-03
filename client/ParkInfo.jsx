import React from 'react';
import styled from 'styled-components';
import Activity from './Activity.jsx';
import ParkImage from './ParkImage.jsx';
import ClosuresList from './ClosuresList.jsx';
import ActivityList from './ActivityList.jsx';

const Info = styled.div`
  margin: 20px;
  padding: 10px;
  box-shadow: 5px 5px 5px 5px #888888;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25px 125px 1fr;
`;

const Title = styled.div `
  font-size: 1.17em;
  font-weight: bold;
  grid-column: 1 / span 2;
`;

const Images = styled.div `
  grid-row: 3;
  grid-column: 2;
`;

const Description = styled.p `
  grid-column: 1 / span 2;
`;

const ParkInfo = ({park}) => {
  return (
    <Info className="park-info">
      <Title>{park.name}</Title>
      <Description>{park.description}</Description>
      <ActivityList activities={park.activities}/>
      <ClosuresList closures={park.closures} />
      <Images>
        {park.images.map(image => <ParkImage imageUrl={image} />)}
      </Images>
    </Info>
  );
}

export default ParkInfo;