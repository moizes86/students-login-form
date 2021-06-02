import React from "react";

const DisplayStudentDetails = ({ activeStudent }) => {
  return activeStudent ? (
    <div className="student-details text-dark">
      {Object.keys(activeStudent).map((key, i) => (
        <p key={`${key}-${i}`}>
          <strong className="mr-2">{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
          <span> {activeStudent[key]}</span>
        </p>
      ))}
    </div>
  ) : null;
};

export default DisplayStudentDetails;
