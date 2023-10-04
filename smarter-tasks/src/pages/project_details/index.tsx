import React from "react";
import ProjectDetails from "./ProjectDetails";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import { CommentProvider } from "../../context/comment/context";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <CommentProvider>
        <ProjectDetails />
        <Outlet />
      </CommentProvider>
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;