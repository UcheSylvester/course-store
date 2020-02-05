import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import courseStore from "../../flux/stores/course.store";

import * as courseActions from "../../flux/actions/course.actions";

import CourseList from "../../components/course-list/course-list.component";

const CoursesPage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  // when store changes, set the courses state to the courses from the courseStore
  const onChange = () => setCourses(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange); // listening for changes to the courseStore

    // check for when courses in courseStore is empty and loadCourses
    if (courseStore.getCourses().length === 0) courseActions.loadCourses();

    return () => courseStore.removeChangeListener(onChange); // cleaning up event subscription on unmount
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
