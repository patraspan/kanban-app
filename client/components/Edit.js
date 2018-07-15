import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import PropTypes from 'prop-types';

export default class Edit extends Component {
  checkEnter = (e) => {
    // const code = (e.keyCode ? e.keyCode : e.which);
    if (e.key === 'Enter') {
      this.finishEdit(e);
      console.log('hit enter');
    }
  }
  finishEdit = (e) => {
    const value = e.target.value;
    if (value.trim().length !== 0) {
      this.props.onUpdate(value.trim());
    }
  }
  renderDelete = () => {
    return (
      <button
        onClick={this.props.onDelete}
      >
        <i className="fa fa-minus" aria-hidden="true"></i>
      </button>
    );
  }
  renderValue = () => {
    const { value, onDelete, onValueClick } = this.props;
    return (
      <div>
        <p onClick={onValueClick}>
          {value}
        </p>
        {onDelete ? this.renderDelete() : null}
      </div>
    );
  }
  renderEdit = () => {
    return (
      <TextareaAutosize
        className={this.props.styles}
        type="text"
        autoFocus
        defaultValue={this.props.value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  }
  render() {
    return (
      <div className={this.props.className}>
        {this.props.editing ? this.renderEdit() : this.renderValue()}
      </div>
    );
  }
}

Edit.propTypes = {
  value: PropTypes.string,
  onUpdate: PropTypes.func,
  onValueClick: PropTypes.func,
  onDelete: PropTypes.func,
  editing: PropTypes.bool,
  className: PropTypes.string,
  styles: PropTypes.string,
};
