import { createPortal } from "react-dom";
import { useRef,useImperativeHandle,forwardRef } from "react";

const Modal = forwardRef(function Modal(
    { title,time},
    ref
  ) {
    const dialog = useRef();
  
    useImperativeHandle(ref, () => {
      return {
        open: () => {
          dialog.current.showModal();
        },
      };
    });
  
    return createPortal(
      <dialog id="modal" ref={dialog}>
        <h2>{title}</h2>
        <p>{time}</p>
        <form method="dialog" id="modal-actions">
            <button>Close</button>
        </form>
      </dialog>,
      document.getElementById('modal')
    );
  });
  
  export default Modal;