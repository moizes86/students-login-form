import React, { useState } from "react";

import ErrorMessages from "./ErrorMessages";

// React Bootstrap
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import "./CustomForm.scss";

const CustomForm = () => {
  const [loginData, setLoginData] = useState({
    username: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: /^[a-zA-Z][0-9a-zA-Z]{5,}/g,
      },
    },

    email: {
      value: "",
      errors: [],
      validations: {
        required: true,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      },
    },

    address: {
      value: "",
      errors: [],
      validations: {
        required: true,
      },
    },

    course: {
      value: "",
      errors: [],
      validations: {
        required: true,
      },
    },

    gender: {
      value: null,
      errors: [],
      validations: {
        required: true,
      },
    },
  });

  const validateInput = ({ target: { value, name }}) => {
    const newErrors = [];
    const { validations } = loginData[name];


    if (validations.required && !value) {
      newErrors.push(`${name} is required`);
    }

    if (validations.pattern && !validations.pattern.test(value)) {
      newErrors.push(`Invalid ${name}`);
    }

    console.log(newErrors);



    setLoginData({
      ...loginData,
      [name]: {
        ...loginData[name],
        value: value,
        errors: newErrors,
      },
    });

    // console.log(loginData[name].errors);
    
  };

  const onSubmit = (e) => {
    e.preventDefault();

    Object.entries(loginData).forEach(([name,val])=> {
      const value = val.value;
      const data ={target:{name,value}}
      validateInput(data)
    });
      // !val.value && val.validations.required?
      // console.log('Not good'):
      // console.log('All good :)');

  };

  return (
    <div className="form-container px-5 py-4">
      <Form className="form">
        <div className="form-header text-center mb-4">
          <h1>Student Details</h1>
          <h5>Hello Student! Please fill in your details</h5>
          <hr />
        </div>

        <Form.Row>
          {/* USERNAME */}
          <Form.Group as={Col} controlId="username">
            <Form.Label>Username</Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>
                <i className="fas fa-user"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                defaultValue={loginData.username.value}
                name="username"
                onBlur={validateInput}
              />
            </InputGroup>
            <ErrorMessages errors={loginData.username.errors} />
          </Form.Group>
          {/* END USERNAME */}

          {/* EMAIL */}
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>
                <i className="fas fa-mail-bulk"></i>
              </InputGroup.Text>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter Email"
                defaultValue={loginData.email.value}
                onBlur={validateInput}
              />
            </InputGroup>
            <ErrorMessages errors={loginData.email.errors} />
          </Form.Group>
          {/* END EMAIL */}
        </Form.Row>

        {/* ADDRESS */}
        <Form.Row>
          <Form.Group as={Col} controlId="address">
            <Form.Label>Address</Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>
                <i className="fas fa-city"></i>
              </InputGroup.Text>
              <Form.Control
                name="address"
                as="textarea"
                rows={3}
                placeholder="Street, Number, City, Zip"
                defaultValue={loginData.address.value}
                onBlur={validateInput}
              />
            </InputGroup>
            <ErrorMessages errors={loginData.address.errors} />
          </Form.Group>
        </Form.Row>
        {/* END ADDRESS */}

        <Form.Row>
          {/* COURSE */}
          <Form.Group as={Col} id="course">
            <Form.Label>Course</Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>
                <i className="fas fa-graduation-cap"></i>
              </InputGroup.Text>
              <Form.Control required as="select" name="course" onBlur={validateInput}>
                <option>React</option>
                <option>Angular</option>
                <option>Vue</option>
                <option>Svete</option>
                <option>JQuery</option>
              </Form.Control>
            </InputGroup>
            <ErrorMessages errors={loginData.course.errors} />
          </Form.Group>
          {/* END COURSE */}

          {/* GENDER */}
          <Form.Group as={Col} id="gender">
            <Form.Label>Gender</Form.Label>
            <InputGroup className="mb-2">
              <ButtonGroup
                type="checkbox"
                defaultValue={loginData.gender.value}
                name="gender"
                onBlur={validateInput}
              >
                <Button variant="outline-secondary" name="gender" value="Female">
                  Female
                </Button>
                <Button variant="outline-secondary" name="gender" value="Male">
                  Male
                </Button>
                <Button variant="outline-secondary" name="gender" value="Other">
                  Other
                </Button>
              </ButtonGroup>
            </InputGroup>
            <ErrorMessages errors={loginData.gender.errors} />
          </Form.Group>
          {/* END GENDER */}
        </Form.Row>

        <Button onClick={onSubmit} type="submit" variant="primary" size="md" block>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CustomForm;
