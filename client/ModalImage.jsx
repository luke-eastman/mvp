import React from 'react';
import styled from 'styled-components';

const Image = styled.img `
  width: 400px;
  height: 400px;

`;

const ModalImage = ({imageUrl}) => {
  return (
    <Image src={imageUrl} />
  );
}

export default ModalImage;