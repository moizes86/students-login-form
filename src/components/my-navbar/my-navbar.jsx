import React from "react";
import {useHistory} from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-navbar.scss";

const MyNavbar = () => {
  let history = useHistory();
  return (
    <Navbar bg="dark" variant="dark" className="mb-5">
      <Container>
        <Navbar.Brand className="ml-3" onClick={() => history.push("/")}>
          Home
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => history.push("/signup")}>SignUp</Nav.Link>
          <Nav.Link onClick={() => history.push("/display-students")}>Display Students</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
