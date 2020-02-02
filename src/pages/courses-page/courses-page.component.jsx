import React from "react";
import { getCourses } from "../../api/courseApi";
import Course from "../../components/course/course.component";

class CoursesPage extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    getCourses().then(courses => this.setState({ courses: courses }));
  }
  render() {
    console.log(this.state);

    const { courses } = this.state;

    return (
      <>
        <h2>Courses</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {courses.map(({ id, ...otherCourseProps }) => (
              <Course key={id} {...otherCourseProps} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
