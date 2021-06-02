import React from "react";

const SignupErrorMessages = ({ errors }) => {
  return (
    <>
      {errors.map((error, index) => (
        <small key={index} id="emailHelp" className="form-text text-danger">
          {error}
        </small>
      ))}
    </>
  );
};

export default SignupErrorMessages;
