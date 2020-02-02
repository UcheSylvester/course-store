import React from "react";
import { Link } from "react-router-dom";

const Course = ({ title, authorId, category, slug }) => (
  <tr>
    <td>
      <Link to={`course/${slug}`}>{title}</Link>
    </td>
    <td>{authorId}</td>
    <td>{category}</td>
  </tr>
);

export default Course;
