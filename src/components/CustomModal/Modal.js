import React, { useState, useRef } from 'react';
import './styles.css'; // Import your CSS file for modal styling

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>

      {isOpen && (
        // ref prevents from closing the modal box if we click inside the modal . 
        // otherwise if we click inside the modal then also it closes modal
        <div className="modal_overlay" ref={modalRef} onClick={closeModal}> 
          <div className="modal_content">
            <span className="close_button" onClick={toggleModal}>
              &times;
            </span>
            <h2 className="modal_heading">Modal Heading</h2>
            <p>Here you can put your modal content.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
