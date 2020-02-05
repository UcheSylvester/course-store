import React from "react";
import { Link } from "react-router-dom";

const Course = ({
  course: { id, title, authorId, category, slug },
  deleteCourse
}) => (
  <tr>
    <td>
      <button
        className="btn btn-outline-danger"
        onClick={() => deleteCourse(id)}
      >
        Delete
      </button>
    </td>
    <td>
      <Link to={`course/${slug}`}>{title}</Link>
    </td>
    <td>{authorId}</td>
    <td>{category}</td>
  </tr>
);
export default Course;
