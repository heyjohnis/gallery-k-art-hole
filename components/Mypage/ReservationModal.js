import React, {useEffect, useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useRecoilState } from "recoil";

const ReservationModal = ( { show } ) => {

    const [ showModal, setShowModal ] = useState(false);
    console.log("showModal: ", showModal);
    const handleClose = () => {
      setShowModal(false);
    }

    useEffect(() => {
      setShowModal(show);
    }, [show])

    
    return (
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>예약신청</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleClose}>
            신청
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default ReservationModal;
