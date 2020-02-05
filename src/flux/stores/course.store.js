import { EventEmitter } from "events";

import Dispatcher from "../app.dispatcher";

import actionTypes from "../actions/action.types";

const CHANGE_EVENT = "changer";

let _courses = [];

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

// Registrating actions and emiting updated store
Dispatcher.register(action => {
  switch (action.actionType) {
    // pushing the created courses to _courses and emiting the store
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;

    // setting _courses to the courses fetched from loadCouse action and emiting
    case actionTypes.LOAD_COURSE:
      _courses = action.courses;
      store.emitChange();

      break;

    default:
    // Default to nothing
  }
});

export default store;
