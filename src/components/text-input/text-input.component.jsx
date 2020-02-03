import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ label, onChange, error, id, ...otherProps }) => (
  <div className={`${error && error.length ? "has-error" : ""} form-group`}>
    <label htmlFor={id}>{label}</label>
    <div className="field">
      <input className="form-control" onChange={onChange} {...otherProps} />
    </div>

    {error && <div className="alert alert-danger">{error} </div>}
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

TextInput.default = {
  error: ""
};

export default TextInput;
