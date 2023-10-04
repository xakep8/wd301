import React, { Suspense } from "react";
const ProjectDetails = React.lazy(() => import("./ProjectDetails"));
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import { CommentProvider } from "../../context/comment/context";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <CommentProvider>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
        <ProjectDetails />
        </Suspense>
        <Outlet />
      </CommentProvider>
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;
