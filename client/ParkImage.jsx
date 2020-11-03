import React from 'react';
import styled from 'styled-components'

const Image = styled.img`
  grid-column: 2
`;

const ParkImage = ({imageUrl}) => {
  return (
    <Image src={imageUrl} width="42" height="42"/>
  );
}

export default ParkImage;