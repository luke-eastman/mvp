import React from 'react';
import styled from 'styled-components';
import ParkInfo from './ParkInfo.jsx';

const List = styled.div`
  position: relative;
  width: 86%;
  left: 8%;
`;

const ParksList = ({parks, openModal}) => {
  return (
    <List className="parks-list" >
      {parks.map(park => <ParkInfo park={park} key={park.id} openModal={openModal}/>)}
    </List>
  );
}

export default ParksList;