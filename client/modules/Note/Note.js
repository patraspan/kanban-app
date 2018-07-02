import React, { PropTypes } from 'react';
require('./Note.css');

const Note = props => (
  <li className="Note">{props.children}</li>
);

Note.propTypes = {
  children: PropTypes.any,
};

export default Note;
