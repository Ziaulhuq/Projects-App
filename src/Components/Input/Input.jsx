import React from "react";

function Input({ textarea, label }) {
  return (
    <>
      <p>{label}</p>
      <div>{textarea ? <textarea /> : <input />}</div>
    </>
  );
}

export default Input;
