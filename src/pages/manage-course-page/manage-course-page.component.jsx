import React, { useState } from "react";

import CourseForm from "../../components/course-form/course-form.component";
// import { Prompt } from "react-router-dom";

const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: "",
    slug: ""
  });

  const handleInputChange = event => {
    const { value, name } = event.target;

    const updatedCourse = { ...course, [name]: value };

    setCourse(updatedCourse, []);
  };

  return (
    <div>
      <h2>Manage Courses</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave" /> */}
      <CourseForm course={course} onInputChange={handleInputChange} />
    </div>
  );
};

export default ManageCoursePage;
