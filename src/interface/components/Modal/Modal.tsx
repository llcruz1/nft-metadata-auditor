import React from "react";
import "./Modal.scss";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ showModal, onClose, children }: ModalProps) {
  return (
    <div className={showModal ? "display-block" : "display-none"}>
      {showModal && <div className="overlay"></div>}
      <div className="modal-content">
        <>
          <div className="modal-header">
            <button type="button" onClick={onClose}>
              <b>x</b>
            </button>
          </div>
          {children}
        </>
      </div>
    </div>
  );
}

export default Modal;
