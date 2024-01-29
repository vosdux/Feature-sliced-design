import { TaskListObserver } from "@pages/TaskList";
import { TaskPageObserver } from "@pages/TaskPage";
import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<TaskListObserver />} />
          <Route path="/:id" element={<TaskPageObserver />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
