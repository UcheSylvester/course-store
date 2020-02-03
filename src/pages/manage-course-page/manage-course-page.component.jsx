import React, { useState } from "react";

import * as courseApi from "../../api/courseApi";

import CourseForm from "../../components/course-form/course-form.component";
import { toast } from "react-toastify";
// import { Prompt } from "react-router-dom";

const ManageCoursePage = ({ history }) => {
  const [errors, setErrors] = useState({});

  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: "",
    slug: ""
  });

  const handleChange = event => {
    const { value, name } = event.target;

    const updatedCourse = { ...course, [name]: value };

    setCourse(updatedCourse, []);
  };

  const formIsValid = () => {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    // form is valid when _errors property has no value
    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid()) return;

    courseApi.saveCourse(course).then(() => {
      toast.success("Course saved successfully!");
      history.push("/courses");
    });
  };

  return (
    <div>
      <h2>Manage Courses</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave" /> */}
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ManageCoursePage;
