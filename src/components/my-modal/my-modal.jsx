import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./my-modal.scss";
import DAL from "../../DAL/api";

const MyModal = ({ childComponent: ChildComponent, updateParent }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    updateParent([...DAL.getStudents()]);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Student
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <ChildComponent />
      </Modal>
    </>
  );
};

export default MyModal;
