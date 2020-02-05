import React from "react";

import PropTypes from "prop-types";

import Course from "../course/course.component";
import { Link } from "react-router-dom";

const CourseList = ({ courses, deleteCourse }) => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>

      <tbody>
        {courses.map(course => (
          <tr key={course.id}>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteCourse(course.id)}
              >
                Delete
              </button>
            </td>
            <td>
              <Link to={`course/${course.slug}`}>{course.title}</Link>
            </td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
          </tr>
          // <Course key={course.id} course={course} deleteCourse={deleteCourse} />
        ))}
      </tbody>
    </table>
  </>
);

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CourseList;
