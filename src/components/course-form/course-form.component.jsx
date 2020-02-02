import React from "react";

const CourseForm = ({
  course: { title, authorId, category },
  onInputChange
}) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            type="text"
            id="title"
            value={title}
            name="title"
            className="form-control"
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            className="form-control"
            name="authorId"
            id="author"
            value={authorId || ""}
            onChange={onInputChange}
          >
            <option value="1">Cory House</option>
            <option value="2">Scot Allen</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            value={category}
            name="category"
            className="form-control"
            onChange={onInputChange}
          />
        </div>
      </div>
    </form>
  );
};

export default CourseForm;
