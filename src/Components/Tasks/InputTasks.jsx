import React, { useState } from "react";

const InputTasks = () => {
  const [inputTask, setInputTask] = useState("");

  function handleInputTask(e) {
    setInputTask(e.target.value);
  }

  function handleAddTask() {
    setInputTask("");
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="w-[20rem] p-3 mb-4 h-9 bg-red-100 rounded-md"
        value={inputTask}
        onChange={handleInputTask}
      />
      <button
        className="mx-2 rounded-md bg-slate-600 text-slate-100 font-medium px-2 py-1 h-9"
        onClick={handleAddTask}
      >
        Add Tasks
      </button>
    </div>
  );
};

export default InputTasks;
