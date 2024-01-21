import { useRef } from "react";
import Input from "../Input/Input";
import styles from "./InputPage.module.css";
import Modal from "../Modal/Modal.jsx";

const InputPage = ({ onAddData, onCancel }) => {
  const dialog = useRef();
  const name = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredName = name.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation....
    if (
      enteredName.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      dialog.current.open();
      return;
    }
    onAddData({
      name: enteredName,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={dialog}>
        <h2 className="text-2xl text-stone-900 font-semibold mb-2">
          Invalid input
        </h2>
        <p className="mb-3">oops... forget to enter a input.</p>
      </Modal>
      <div className={styles.input_container}>
        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={onCancel}>
            Cancel
          </button>
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
