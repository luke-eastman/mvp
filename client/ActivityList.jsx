import React from 'react';
import styled from 'styled-components';
import Activity from './Activity.jsx';

const Activities = styled.div `
  grid-row: 3;
`;

const ActivityList = ({activities}) => {
  return (
    <Activities>
      {activities.map(activity => <Activity activity={activity} />)}
    </Activities>
  );
}

export default ActivityList;