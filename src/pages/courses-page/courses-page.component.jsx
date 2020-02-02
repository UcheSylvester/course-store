import React, { useState, useEffect } from "react";

import { getCourses } from "../../api/courseApi";

import CourseList from "../../components/course-list/course-list.component";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(courses => setCourses(courses));
  }, []);

  return <CourseList courses={courses} />;
};

export default CoursesPage;
