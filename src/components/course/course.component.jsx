import React from "react";

const Course = ({ title, authorId, category }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{authorId}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Course;
