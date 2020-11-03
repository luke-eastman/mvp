import React from 'react';
import Closure from './Closure.jsx';

const ClosuresList = ({closures}) => {
  return (
    <div>
      <h3>Closures</h3>
      {closures.map(closure => <Closure  closure={closure} />)}
    </div>
  );
}

export default ClosuresList;