import { EventEmitter } from "events";

import Dispatcher from "../app.dispatcher";

import actionTypes from "../actions/action.types";

const CHANGE_EVENT = "changer";

const _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  // getting the courses in this store
  getCourses() {
    return _courses;
  }

  // getting course by slug
  getCourseBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;

    default:
    // Default to nothing
  }
});

export default store;
