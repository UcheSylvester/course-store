import React from "react";
import { getCourses } from "../../api/courseApi";

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
            {courses.map(({ id, title, authorId, category }) => (
              <tr key={id}>
                <td>{title}</td>
                <td>{authorId}</td>
                <td>{category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
