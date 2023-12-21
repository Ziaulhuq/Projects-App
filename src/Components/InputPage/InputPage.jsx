import React from "react";
import Input from "../Input/Input";
import Button from "../UI/Button";

const InputPage = () => {
  return (
    <>
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
      <Input label="Name" />
      <Input label="description" textarea />
      <Input label="date" />
      <Button>+ Add Projects</Button>
    </>
  );
};

export default InputPage;
