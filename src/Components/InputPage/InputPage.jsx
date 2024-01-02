import { useRef } from "react";
import Input from "../Input/Input";
import styles from "./InputPage.module.css";

const InputPage = ({ onAddData }) => {
  const name = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredName = name.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation....
    onAddData({
      name: enteredName,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <div className={styles.input_container}>
        <div className={styles.buttons}>
          <button className={styles.cancel}>Cancel</button>
          <button onClick={handleSave} className={styles.save}>
            Save
          </button>
        </div>
        <Input type="text" rows={3} label="Name" ref={name} />
        <Input type="textarea" label="description" ref={description} textarea />
        <Input type="date" label="date" ref={dueDate} />
      </div>
    </>
  );
};

export default InputPage;
