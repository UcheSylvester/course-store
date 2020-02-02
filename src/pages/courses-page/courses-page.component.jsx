import React, { useState, useEffect } from "react";

import { getCourses } from "../../api/courseApi";
import { Link } from "react-router-dom";

import CourseList from "../../components/course-list/course-list.component";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(courses => setCourses(courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
};

export default CoursesPage;
