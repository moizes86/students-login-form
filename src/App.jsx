import React from "react";
import MyLinks from './components/my-links/my-links';
// STYLES
import Jumbotron from "react-bootstrap/Jumbotron";
import "./App.scss";

// ROUTING

function App() {

  return (
    <div className="App text-dark">
        <Jumbotron className="mt-5 text-center">
          <h1 className="mb-4">Student Manager</h1>
          <p>Here you can register and display your students</p>
          <span style={{ fontSize: "0.7rem" }}>Or not.</span>
          <p className="mt-4">
            <MyLinks />
          </p>
        </Jumbotron>
    </div>
  );
}

export default App;
