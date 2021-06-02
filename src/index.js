import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// COMPONENTS
import App from "./App";
import Signup from './components/signup/signup';
import DisplayStudents from './components/display-students/display-students';
import MyNavbar from "./components/my-navbar/my-navbar";

import Container from 'react-bootstrap/Container';
import "./index.scss";
import SignupConfirmationMessage from "./components/signup-confirmation-message/signup-confirmation-message";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyNavbar />
      <Container>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/display-students">
            <DisplayStudents />
          </Route>
          <Route exact path="/signup-confirmation-message">
            <SignupConfirmationMessage />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
