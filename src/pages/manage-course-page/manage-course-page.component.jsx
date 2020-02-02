import React from "react";

import CourseForm from "../../components/course-form/course-form.component";
// import { Prompt } from "react-router-dom";

const ManageCoursePage = props => (
  <div>
    <h2>Manage Courses</h2>
    {/* <Prompt when={true} message="Are you sure you want to leave" /> */}
    <CourseForm></CourseForm>
  </div>
);

export default ManageCoursePage;
