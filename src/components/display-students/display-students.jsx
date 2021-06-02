import React, { useState } from "react";

import DisplayStudentDetails from "../display-students-details/display-students-details";
import Signup from "../signup/signup";
import DAL from "../../DAL/api";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import MyModal from "../my-modal/my-modal";

import './display-students.scss';

const DisplayStudents = () => {
  const [activeStudent, setActiveStudent] = useState();
  const [students, setStudents] = useState(DAL.getStudents());
  function handleSort(){
    setStudents(DAL.sortStudentsByName());
  }

  return (
    <div className="display-students text-dark">
      <h4 className="text-center my-4">Student Details</h4>
      <Row>
        <Col sm={3}>
          <ListGroup as="ul">
            {students.map((student, i) => (
              <ListGroup.Item
                key={`${student.username}-${i}`}
                action
                onClick={() => setActiveStudent(student)}
              >
                {student.username}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <DisplayStudentDetails activeStudent={activeStudent} />
        </Col>
      </Row>

      <div className="mt-3">
        <p className="p-1 sort-by-name" onClick={handleSort}>Sort By Name</p>
        <div className="my-3" />
        <MyModal updateParent={setStudents} childComponent={Signup} />
      </div>
    </div>
  );
};
//
export default DisplayStudents;
