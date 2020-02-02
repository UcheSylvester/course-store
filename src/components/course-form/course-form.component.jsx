import React from "react";

const CourseForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            type="text"
            id="title"
            value=""
            name="title"
            className="form-control"
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
            value=""
          ></select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            type="text"
            id="title"
            value=""
            name="title"
            className="form-control"
          />
        </div>
      </div>
    </form>
  );
};

export default CourseForm;
