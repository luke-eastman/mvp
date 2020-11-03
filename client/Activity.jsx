import React from 'react';
import styled from 'styled-components';
const StyledActivity = styled.div `
  display: flex;
`;

const Delimiter = styled.div`
  margin: 3px 8px 3px 8px;
`;
const Activity = ({activity}) => {
  return (
    <StyledActivity>
      {activity}
      <Delimiter>|</Delimiter>
    </StyledActivity>
  );
}

export default Activity;