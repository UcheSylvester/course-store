import dispatcher from "../app.dispatcher";

import * as courseApi from "../../api/courseApi";

import actionTypes from "./action.types";

/**
 * save course action: call the api for saving courses
 *  and dispatch the action (actionType and payload)
 */
//
//
export const saveCourse = course => {
  return courseApi.saveCourse(course).then(savedCourse => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
};
