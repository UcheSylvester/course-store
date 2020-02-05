import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";

import courseStore from "../../flux/stores/course.store";
import * as courseActions from "../../flux/actions/course.actions";

import CourseForm from "../../components/course-form/course-form.component";

const ManageCoursePage = ({ history, match }) => {
  const [errors, setErrors] = useState({});

  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: "",
    slug: ""
  });

  // getting course by slug, using the courseStore getCourseBySlug function
  useEffect(() => {
    // getting the slug from the match params
    const slug = match.params.slug;

    // checking if slug before getting the course
    if (slug) setCourse(courseStore.getCourseBySlug(slug));
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

  // handling form submission for creating courses
  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid()) return;

    /***
     * since this is an action performed by the user for saving courses
     * we call the saveCourse action from our course actions, passing in
     * the action to be saved.
     */
    courseActions.saveCourse(course).then(() => {
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
