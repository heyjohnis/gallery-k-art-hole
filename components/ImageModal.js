/* eslint-disable react/prop-types */
import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Modal } from "react-bootstrap";

const ImageModal = ({ imageUrl }, ref) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useImperativeHandle(ref, () => ({
    showModal,
  }));

  const showModal = () => {
    setShow(true);
  };

  return (
    <Modal className="modal-xl" show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <img src={imageUrl} style={{ width: "100%" }} />
    </Modal>
  );
};

export default forwardRef(ImageModal);
