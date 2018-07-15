import {
  connect
} from 'react-redux';
import {
  compose
} from 'redux';
import {
  DropTarget
} from 'react-dnd';
import callApi from '../../util/apiCaller';
import ItemTypes from '../Kanban/itemTypes';
import Lane from './Lane';
import {
  createLaneRequest,
  editLane,
  deleteLaneRequest,
  updateLaneRequest,
  moveBetweenLanes,
  removeFromLane,
  pushToLane,
  changeLanesRequest,
} from './LaneActions';
import {
  createNoteRequest
} from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId]),
});

const mapDispatchToProps = {
  editLane,
  deleteLane: deleteLaneRequest,
  updateLane: updateLaneRequest,
  addNote: createNoteRequest,
  createLane: createLaneRequest,
  moveBetweenLanes,
  removeFromLane,
  pushToLane,
  changeLanesRequest,
};

const noteTarget = {
  drop(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const {
      id: noteId,
      laneId: sourceLaneId,
      _id: note_id,
    } = sourceProps;
    if (targetProps.lane.id !== sourceLaneId) {
      const newTargetNotes = targetProps.laneNotes.map(note => note._id);
      newTargetNotes.push(note_id);
      targetProps.changeLanesRequest(sourceLaneId, targetProps.lane.id, noteId, newTargetNotes);
    } else {
      const notes = targetProps.laneNotes.map(note => note._id);
      callApi(`lanes/${sourceLaneId}`, 'put', {
        notes
      });
    }
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(ItemTypes.NOTE, noteTarget, (dragConnect) => ({
    connectDropTarget: dragConnect.dropTarget(),
  }))
)(Lane);
