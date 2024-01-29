import { useState } from "react";
import { Modal } from "react-bootstrap";
import DaumPostcode from "react-daum-postcode";

export default function ModalDaumPost({ getAddressData, isOpen }) {
  return (
    <Modal show={isOpen}>
      <DaumPostcode
        onComplete={(data) => {
          console.log("onComplete: ", data);
          getAddressData(data);
        }}
        autoClose
        animation
      />
    </Modal>
  );
}
