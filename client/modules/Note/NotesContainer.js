import { connect } from 'react-redux';
import Notes from './Notes';
import {
  editNote,
  updateNoteRequest,
  deleteNoteRequest,
  moveWithinLane,
} from './NoteActions';

const mapDisaptchToProps = {
  editNote,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
  moveWithinLane,
};

export default connect(
  null,
  mapDisaptchToProps
)(Notes);
