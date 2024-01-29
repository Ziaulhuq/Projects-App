import React from "react";
import Tasks from "../Tasks/Tasks.jsx";

const SelectedProjects = ({
  project,
  onHandleDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="w-[35rem]">
      <div className=" flex justify-between mt-2">
        <h2 className="text-3xl mb-4 font-bold">{project.name}</h2>
        <button
          className="text-slate-700 bg-stone-200 rounded-xl px-3 py-1 h-8 hover:text-slate-900"
          onClick={onHandleDelete}
        >
          delete
        </button>
      </div>
      <p className="text-stone-900 mb-4">{formattedDate}</p>
      <p className="text-stone-800 whitespace-pre-wrap mb-5">
        {project.description}
      </p>
      <hr className="mb-4" />
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
};

export default SelectedProjects;
