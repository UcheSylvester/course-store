import React from "react";

const ManageCoursePage = props => {
  console.log(props);

  return (
    <>
      <h2>Manage Courses</h2>
      <p>{props.match.params.slug} </p>
    </>
  );
};

export default ManageCoursePage;
