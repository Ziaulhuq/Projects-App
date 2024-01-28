import React from "react";
import Tasks from "../Tasks/Tasks.jsx";

const SelectedProjects = ({ project, onHandleDelete }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });
  return (
    <div className="w-[35rem]">
      <div className=" flex justify-between mt-2">
        <h2 className="text-3xl mb-4 font-bold">{project.name}</h2>
        <button
          className="text-slate-500 bg-slate-200 rounded-xl px-3 py-1 h-8 hover:text-slate-900"
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
      <Tasks />
    </div>
  );
};

export default SelectedProjects;
