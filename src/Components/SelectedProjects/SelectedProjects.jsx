import React from "react";

const SelectedProjects = ({ project }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });
  return (
    <div className="w-[35rem]">
      <div className=" flex justify-between mt-2">
        <h2 className="text-3xl mb-4 font-bold">{project.name}</h2>
        <button>delete</button>
      </div>
      <p className="text-stone-600 mb-4">{formattedDate}</p>
      <p className="text-stone-800 whitespace-pre-wrap mb-5">
        {project.description}
      </p>
      <hr />
      <ul>TASKS</ul>
    </div>
  );
};

export default SelectedProjects;
