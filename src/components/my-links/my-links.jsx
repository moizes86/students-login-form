import React from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const MyLinks = ({signupInner, displayStudentsInner})=> {
    return (
      <>
        <Link to="/signup">
          <Button variant="primary" className="mr-4">
            {signupInner?? 'SignUp'}
          </Button>
        </Link>
        <Link to="/display-students">
          <Button variant="primary">{displayStudentsInner??' Display Students'}</Button>
        </Link>
      </>
    );
};

export default MyLinks;