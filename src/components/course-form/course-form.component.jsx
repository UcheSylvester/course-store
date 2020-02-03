import React from "react";

import TextInput from "../text-input/text-input.component";

const CourseForm = ({ course: { title, authorId, category }, onChange }) => {
  return (
    <form>
      <TextInput
        type="text"
        id="title"
        value={title}
        name="title"
        onChange={onChange}
        label="Title"
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
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
        </div>
      </div>

      <TextInput
        type="text"
        label="Category"
        id="category"
        value={category}
        name="category"
        className="form-control"
        onChange={onChange}
      />
    </form>
  );
};

export default CourseForm;
