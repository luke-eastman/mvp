import React from 'react';
import styled from 'styled-components'

const Image = styled.img`
  grid-column: 2;
  width: 100px;
  height: 100px;
`;

const ParkImage = ({imageUrl, openModal, images}) => {
  return (
    <Image src={imageUrl} onClick={() => openModal(images)}/>
  );
}

export default ParkImage;