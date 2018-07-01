import { connect } from 'react-redux';
import Lane from './Lane';

import { createLaneRequest, deleteLaneRequest, updateLaneRequest, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => {
      return { ...state.notes[noteId],
      };
    }),
  };
};

const mapDispatchToProps = {
  editLane,
  deleteLane: deleteLaneRequest,
  updateLane: updateLaneRequest,
  addNote: createNoteRequest,
  createLane: createLaneRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
