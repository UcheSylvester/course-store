import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = props => {
  console.log(props);

  return (
    <>
      <h2>Manage Courses</h2>
      <Prompt when={true} message="Are you sure you want to leave" />
      <p>{props.match.params.slug} </p>
    </>
  );
};

export default ManageCoursePage;
