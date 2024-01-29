import React, { useState } from "react";

const InputTasks = ({ onAddTask }) => {
  const [inputTask, setInputTask] = useState("");

  function handleInputTask(e) {
    setInputTask(e.target.value);
  }

  function handleAddTask() {
    if (inputTask.trim() === "") {
      return;
    }
    onAddTask(inputTask);
    setInputTask("");
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="w-[28rem] p-3 mb-4 h-9 bg-stone-200 rounded-md"
        value={inputTask}
        onChange={handleInputTask}
      />
      <button
        className="mx-2 rounded-md bg-stone-600 text-slate-100 font-medium px-2 py-1 h-9 text-sm hover:bg-stone-900"
        onClick={handleAddTask}
      >
        Add Tasks
      </button>
    </div>
  );
};

export default InputTasks;
