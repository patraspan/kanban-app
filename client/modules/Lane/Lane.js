import React from 'react';
import PropTypes from 'prop-types';
import NotesContainer from '../Note/NotesContainer';
import Edit from '../../components/Edit';
import styles from './Lane.css';

const Lane = props => {
  const { connectDropTarget, lane, laneNotes, updateLane, addNote, deleteLane, editLane } = props;
  const laneId = lane.id;

  return connectDropTarget(
    <div className={styles.Lane}>
      <div className={styles.LaneHeader}>
        <div className={styles.LaneDelete}>
          <button onClick={() => deleteLane(laneId)}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
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
        <div className={styles.LaneAddNote}>
          <span
            className={styles.AddNote}
            onClick={() => addNote({ task: 'New Note' }, laneId)}
          >
            Add note<i className="fa fa-plus-circle" aria-hidden="true"></i>
          </span>
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
