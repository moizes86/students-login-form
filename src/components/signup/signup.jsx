import React, { useState } from "react";
import SignupErrorMessages from "../signup-error-messages/signup-error-messages";
import DAL from "../../DAL/api";
import { useHistory } from "react-router-dom";

// React Bootstrap
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import "./signup.scss";

const Signup = () => {
  const validations = {
    username: {
      required: true,
      pattern: /^[a-zA-Z][0-9a-zA-Z]{2,}/g,
    },
    email: {
      required: true,
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    address: {
      required: true,
    },
    course: {
      required: true,
    },
    gender: {
      required: true,
    },
  };
  const history = useHistory();

  const [username, setUsername] = useState("Moshe Mantsur");
  const [usernameErrors, setUsernameErrors] = useState([]);

  const [email, setEmail] = useState("moshe.mn86@gmail.com");
  const [emailErrors, setEmailErrors] = useState([]);

  const [address, setAddress] = useState("Kineret 12 Rehovot");
  const [addressErrors, setAddressErrors] = useState([]);

  const [course, setCourse] = useState("React");
  const [courseErrors, setCourseErrors] = useState([]);

  const [gender, setGender] = useState("Male");
  const [genderErrors, setGenderErrors] = useState([]);

  const [lodaing, setLoading] = useState(false);

  const fieldsUtils = {
    username: {
      set: setUsername,
      setErrors: setUsernameErrors,
      get: username,
    },
    email: {
      set: setEmail,
      setErrors: setEmailErrors,
      get: email,
    },
    address: {
      set: setAddress,
      setErrors: setAddressErrors,
      get: address,
    },
    course: {
      set: setCourse,
      setErrors: setCourseErrors,
      get: course,
    },
    gender: {
      set: setGender,
      setErrors: setGenderErrors,
      get: gender,
    },
  };

  const validateInput = ({ target: { value, name } }) => {
    const newErrors = [];
    const { required, pattern } = validations[name];

    if (required && !value) {
      newErrors.push(`${name} is required`);
    }

    if (pattern && !pattern.test(value)) {
      newErrors.push(`Invalid ${name}`);
    }

    const { set, setErrors } = fieldsUtils[name];
    set(value);
    setErrors(newErrors);

    return newErrors.length === 0;
  };

  const handleChange = ({ target: { name, value } }) => fieldsUtils[name].set(value);

  const toggleSpinner = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/signup-confirmation-message");
    }, 1000);
  };

  const clearForm = () => {
    Object.keys(fieldsUtils).forEach((key) => fieldsUtils[key].set(""));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let errors = false;
    Object.keys(fieldsUtils).forEach((key) => {
      const isFieldValid = validateInput({ target: { value: fieldsUtils[key].get, name: key } });
      if (!isFieldValid) errors = true;
    });

    if (!errors) {
      toggleSpinner();
      DAL.addStudent({ username, email, address, course, gender });
      clearForm();
    }
  };

  return (
    <div className="form-container px-5">
      <Form className="form p-5">
        <div className="form-header text-center mb-4">
          <h1>Student Details</h1>
          <h5>Hello Student! Please fill in your details</h5>
          <hr />
        </div>

        {/* USERNAME */}
        <Form.Row className="justify-content-md-between">
          <Col sm={5}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <i className="fas fa-user"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={handleChange}
                  name="username"
                  onBlur={validateInput}
                  className={usernameErrors.length ? "invalid-input" : ""}
                />
              </InputGroup>
              <SignupErrorMessages errors={usernameErrors} />
            </Form.Group>
          </Col>
          {/* END USERNAME */}

          {/* EMAIL */}
          <Col sm={5}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <i className="fas fa-mail-bulk"></i>
                </InputGroup.Text>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  value={email}
                  onBlur={validateInput}
                  className={emailErrors.length ? "invalid-input" : ""}
                />
              </InputGroup>
              <SignupErrorMessages errors={emailErrors} />
            </Form.Group>
          </Col>
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
                onChange={handleChange}
                value={address}
                onBlur={validateInput}
                className={addressErrors.length ? "invalid-input" : ""}
              />
            </InputGroup>
            <SignupErrorMessages errors={addressErrors} />
          </Form.Group>
        </Form.Row>
        {/* END ADDRESS */}

        {/* COURSE */}
        <Form.Row className="justify-content-md-between">
          <Col sm={5}>
            <Form.Group id="course">
              <Form.Label>Course</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <i className="fas fa-graduation-cap"></i>
                </InputGroup.Text>
                <Form.Control
                  required
                  as="select"
                  name="course"
                  onBlur={validateInput}
                  defaultValue={course}
                  className={courseErrors.length ? "invalid-input" : ""}
                >
                  <option>React</option>
                  <option>Angular</option>
                  <option>Vue</option>
                  <option>Svete</option>
                  <option>JQuery</option>
                </Form.Control>
              </InputGroup>
              <SignupErrorMessages errors={courseErrors} />
            </Form.Group>
          </Col>
          {/* END COURSE */}

          {/* GENDER */}
          <Col sm={5}>
            <Form.Group id="gender">
              <Form.Label>Gender</Form.Label>
              <InputGroup className="mb-2">
                <ToggleButtonGroup
                  type="radio"
                  name="gender"
                  onBlur={validateInput}
                  value={gender}
                  className={`w-100 ${genderErrors.length ? "invalid-input" : ""}`}
                >
                  <ToggleButton variant="outline-secondary" name="gender" value="Female">
                    Female
                  </ToggleButton>
                  <ToggleButton variant="outline-secondary" name="gender" value="Male">
                    Male
                  </ToggleButton>
                  <ToggleButton variant="outline-secondary" name="gender" value="Other">
                    Other
                  </ToggleButton>
                </ToggleButtonGroup>
              </InputGroup>
              <SignupErrorMessages errors={genderErrors} />
            </Form.Group>
          </Col>
          {/* END GENDER */}
        </Form.Row>

        <Button onClick={onSubmit} type="submit" variant="primary" size="md" block>
          {lodaing && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="mr-2"
            />
          )}
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
