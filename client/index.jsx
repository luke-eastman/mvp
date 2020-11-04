import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import IntoTheWild from './IntoTheWild.jsx';


Modal.setAppElement('#into-the-wild');

ReactDOM.render(<IntoTheWild />, document.getElementById('into-the-wild'));
