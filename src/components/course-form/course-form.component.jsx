import React from "react";
import PropTypes from "prop-types";

import TextInput from "../text-input/text-input.component";
import CustomButton from "../custom-button/custom-button.component";

const CourseForm = ({
  course: { title, authorId, category },
  onChange,
  onSubmit,
  errors
}) => (
  <form onSubmit={onSubmit}>
    <TextInput
      type="text"
      id="title"
      value={title}
      name="title"
      onChange={onChange}
      label="Title"
      error={errors.title}
    />

    <select
      className="form-control"
      name="authorId"
      id="author"
      value={authorId || ""}
      onChange={onChange}
    >
      <option value="" />
      <option value="1">Cory House</option>
      <option value="2">Scot Allen</option>
    </select>
    {errors.authorId && (
      <div className="alert alert-danger">{errors.authorId}</div>
    )}

    <TextInput
      type="text"
      label="Category"
      id="category"
      value={category}
      name="category"
      onChange={onChange}
      error={errors.category}
    />

    <CustomButton className="btn btn-primary" type="submit">
      Submit
    </CustomButton>
  </form>
);

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default CourseForm;
