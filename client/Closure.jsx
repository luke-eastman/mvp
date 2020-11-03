import React from 'react';
import styled from 'styled-components';
const ClosureDesc = styled.div `
  margin: 10px;
`;

const Closure = ({closure}) => {
  return (
    <ClosureDesc>
      {closure.description}
    </ClosureDesc>
  )
}

export default Closure;