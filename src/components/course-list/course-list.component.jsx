import React from "react";
import Course from "../course/course.component";

const CourseList = ({ courses }) => (
  <>
    <h2>Courses</h2>

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

export default CourseList;
