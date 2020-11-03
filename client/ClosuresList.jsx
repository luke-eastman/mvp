import React from 'react';
import Closure from './Closure.jsx';

const ClosuresList = ({closures}) => {
  if (!closures || closures.length === 0) {
    return (
      <div></div>
    );
  }
  return (
    <div>
      <h3>Closures</h3>
      {closures.map(closure => <Closure  closure={closure} />)}
    </div>
  );
}

export default ClosuresList;