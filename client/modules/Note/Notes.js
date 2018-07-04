import React, { PropTypes } from 'react';
import Note from './Note';
import Edit from '../../components/Edit';
import styles from './Note.css';
const Notes = ({
    notes,
    laneId,
    // onValueClick,
    // onUpdate,
    deleteNote,
    moveWithinLane,
    editNote,
    updateNote,
  }) => {
  return (
    <ul className={styles.Notes}>{notes.map((note) =>
      <Note
        id={note.id}
        key={note.id}
        moveWithinLane={moveWithinLane}
        laneId={laneId}
      >
        <Edit
          editing={note.editing}
          value={note.task}
          onValueClick={() => editNote(note.id)}
          onUpdate={task => updateNote({
            ...note,
            task,
            editing: false,
          })}
          onDelete={() => deleteNote(note.id, laneId)}
        />
      </Note>
      )}</ul>
);
};
Notes.propTypes = {
  deleteNote: PropTypes.func,
  onUpdate: PropTypes.func,
  laneId: PropTypes.string,
  onValueClick: PropTypes.func,
  notes: PropTypes.array,
  moveWithinLane: PropTypes.array,
  editNote: PropTypes.array,
  updateNote: PropTypes.array,
};

export default Notes;
