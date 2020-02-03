import React from "react";

const SelectInput = ({
  label,
  id,
  onChange,
  optionvalue1,
  optionvalue2,
  ...otherProps
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <div className="field">
      <select className="form-control" onChange={onChange} {...otherProps}>
        <option value={optionvalue1}>Cory House</option>
        <option value={optionvalue2}>Scot Allen</option>
      </select>
    </div>
  </div>
);

export default SelectInput;
