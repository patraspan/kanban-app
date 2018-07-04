import React, { PropTypes } from 'react';
import NotesContainer from '../Note/NoteContainer';
import Edit from '../../components/Edit';
import styles from './Lane.css';

const Lane = (props) => {
  const { lane, laneNotes, updateLane, addNote, deleteLane, editLane, connectDropTarget } = props;
  const laneId = lane.id;

  return connectDropTarget(
    <div className={styles.Lane}>
      <div className={styles.LaneHeader}>
        <div className={styles.LaneAddNote}>
          <button
            className={styles.AddNote}
            onClick={() => addNote({ task: 'New Note' }, laneId)}
          >Add Note
          </button>
        </div>
        <Edit
          className={styles.LaneName}
          styles={styles.LaneEdit}
          editing={lane.editing}
          value={lane.name}
          onValueClick={() => editLane(lane.id)}
          onUpdate={name => updateLane({ ...lane, name, editing: false })}
        />
        <div className={styles.LaneDelete}>
          <button
            className={styles.deleteNote}
            onClick={() => deleteLane(laneId)}
          >Remove Lane
          </button>
        </div>
      </div>
      <NotesContainer
        notes={laneNotes}
        laneId={laneId}
      />
    </div>
  );
};

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
  editLane: PropTypes.func,
  connectDropTarget: PropTypes.any,
};

export default Lane;
