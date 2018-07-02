import React, { PropTypes } from 'react';
import Note from './Note';
import Edit from '../../components/Edit';
import styles from './Note.css';
const Notes = ({
    notes,
    laneId,
    onValueClick,
    onUpdate,
    deleteNote,
  }) => {
  return (
    <ul className={styles.notes}>
    {notes.map((note) =>
      <Note id={note.id} key={note.id}>
        <Edit
          editing={note.editing}
          value={note.task}
          onValueClick={() => onValueClick(note.id)} onUpdate={(task) => onUpdate({ ...note, task, editing: false })} onDelete={() => deleteNote(note.id,
        laneId)}
        />
      </Note>
    )}
    </ul>
);
};
Notes.propTypes = {
  deleteNote: PropTypes.func,
  onUpdate: PropTypes.func,
  laneId: PropTypes.string,
  onValueClick: PropTypes.func,
  notes: PropTypes.array,
};

export default Notes;
