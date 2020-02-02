import React from "react";

import PropTypes from "prop-types";

import Course from "../course/course.component";

const CourseList = ({ courses }) => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>

      <tbody>
        {courses.map(({ id, ...otherCourseProps }) => (
          <Course key={id} {...otherCourseProps} />
        ))}
      </tbody>
    </table>
  </>
);

CourseList.propTypes = {
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
