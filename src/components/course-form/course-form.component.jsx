import React from "react";

import TextInput from "../text-input/text-input.component";
import CustomButton from "../custom-button/custom-button.component";

const CourseForm = ({
  course: { title, authorId, category },
  onChange,
  onSubmit
}) => (
  <form onSubmit={onSubmit}>
    <TextInput
      type="text"
      id="title"
      value={title}
      name="title"
      onChange={onChange}
      label="Title"
    />

    <select
      className="form-control"
      name="authorId"
      id="author"
      value={authorId || ""}
      onChange={onChange}
    >
      <option value="1">Cory House</option>
      <option value="2">Scot Allen</option>
    </select>

    <TextInput
      type="text"
      label="Category"
      id="category"
      value={category}
      name="category"
      onChange={onChange}
    />

    <CustomButton className="btn btn-primary" type="submit">
      Submit
    </CustomButton>
  </form>
);

export default CourseForm;
