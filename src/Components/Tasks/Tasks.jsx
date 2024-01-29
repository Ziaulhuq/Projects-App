import React from "react";
import InputTasks from "./InputTasks";

const Tasks = ({ onAddTask, tasks, onDeleteTask }) => {
  return (
    <div>
      <h3 className="font-bold mb-4">Tasks</h3>
      <InputTasks onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className="mb-4">There are no more taskes yet..</p>
      )}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li
              className="bg-stone-200 w-[34rem] p-2 my-1 flex justify-between"
              key={task.id}
            >
              <span>{task.taskdata}</span>
              <button
                className="text-stone-600 hover:text-stone-950"
                onClick={() => onDeleteTask(task.id)}
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
