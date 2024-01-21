import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Button from "../UI/Button.jsx";

const Modal = forwardRef(function Modal({ children }, ref) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={modal}
      id={styles.dialogbox}
      className="backdrop:bg-stone-900/90 inset-x-5.5 p-4 rounded-xl"
    >
      {children}
      <form method="dialog" className="text-right">
        <Button className="bg-stone-900 text-stone-400 px-2 py-1 rounded-md hover:text-stone-100">
          close
        </Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
