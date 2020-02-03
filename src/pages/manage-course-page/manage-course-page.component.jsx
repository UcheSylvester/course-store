import React, { useState, useEffect } from "react";

import * as courseApi from "../../api/courseApi";
import { toast } from "react-toastify";

import CourseForm from "../../components/course-form/course-form.component";
// import { Prompt } from "react-router-dom";

const ManageCoursePage = ({ history, match }) => {
  console.log(match);
  const [errors, setErrors] = useState({});

  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: "",
    slug: ""
  });

  useEffect(() => {
    const slug = match.params.slug;
    if (slug)
      courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
  }, [match.params.slug]);

  // handling input changes
  const handleChange = event => {
    const { value, name } = event.target;

    const updatedCourse = { ...course, [name]: value };

    setCourse(updatedCourse);
  };

  // handling form validation
  const formIsValid = () => {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    // form is valid when _errors property has no value
    return Object.keys(_errors).length === 0;
  };

  // handling form submission
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
