import React from 'react';
import styled from 'styled-components';
const StyledActivity = styled.div `
  grid-column: 1;
`;

const Activity = ({activity}) => {
  return (
    <StyledActivity>
      {activity}
    </StyledActivity>
  );
}

export default Activity;