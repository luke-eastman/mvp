import React from 'react';
import styled from 'styled-components';

const Image = styled.img `
  width: 200px;
  height: 200px;

`;

const ModalImage = ({imageUrl}) => {
  return (
    <Image src={imageUrl} />
  );
}

export default ModalImage;