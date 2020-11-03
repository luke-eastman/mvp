import React from 'react';
import styled from 'styled-components';
import Activity from './Activity.jsx';

const Activities = styled.div `
  grid-row: 3;
  grid-column: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 500px;
`;

const ActivityList = ({activities}) => {
  return (
    <div>
      <h4>Activities</h4>
      <Activities>
        {activities.map(activity => <Activity activity={activity} />)}
      </Activities>
    </div>
  );
}

export default ActivityList;