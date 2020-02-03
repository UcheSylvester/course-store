import React from "react";
import PropTypes from "prop-types";

const TextInput = props => (
  <div
    className={`${props.error &&
      props.error.length} ? has-error : '' form-group`}
  >
    <label htmlFor={props.id}>{props.title}</label>
    <div className="field">
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        name={props.name}
        className="form-control"
        onChange={props.onChange}
      />
    </div>

    {props.error && <div className="alert alert-danger">{props.error} </div>}
  </div>
);

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  label: PropTypes.string.isRequired
};

TextInput.defaultProps = {
  error: ""
};

export default TextInput;
