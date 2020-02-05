import dispatcher from "../app.dispatcher";

import * as courseApi from "../../api/courseApi";

import actionTypes from "./action.types";

/**
 * saveCourse action (for when a user adds/updates a course) calls the api for saving courses
 *  and dispatch the action (actionType and savedCourses)
 */
export const saveCourse = course => {
  return courseApi.saveCourse(course).then(savedCourse => {
    // sending the saved course to the dispatcher
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
};

export const loadCourses = () => {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSE,
      courses: courses
    });
  });
};
