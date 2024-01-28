import React from "react";

const InputTasks = () => {
  return (
    <div className="flex align-baseline">
      <input type="text" className="w-[20rem] p-3 mb-4 h-9 bg-red-100" />
      <button className="mx-2 -mt-3 text-slate-800 font-medium">
        Add Tasks
      </button>
    </div>
  );
};

export default InputTasks;
