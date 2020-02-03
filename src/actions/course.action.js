import dispatcher from '../app.dispatcher'
import actionTypes from './action.types'

import * as courseApi from '../api/courseApi'

export const saveCourse = course => {
  return courseApi.saveCourse(course).then(savedCourse => {
    // sending the created/saved courses to all stores that cares for it
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      payload: savedCourse
    })
  })
}