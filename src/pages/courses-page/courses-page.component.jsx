import React, { useState, useEffect } from "react";
import { getCourses } from "../../api/courseApi";
import Course from "../../components/course/course.component";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(courses => setCourses(courses));
  }, []);

  // const { courses } = this.state;

  return (
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
};

export default CoursesPage;
