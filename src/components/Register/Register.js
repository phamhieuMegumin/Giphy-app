import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Spinner,
} from "reactstrap";
import AuthService from "../../Services/AuthServices";
import { useHistory } from "react-router-dom";
import Message from "../Message/Message";
import Validation from "validator";
import "./Register.css";
function Register() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [message, setMessage] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [validation, setValidation] = useState("");
  let timerID = useRef(null);
  const history = useHistory();
  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", password: "", confirmPassword: "", role: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!ValidationAll()) return;
    else {
      const userSubmit = {
        username: user.username,
        password: user.password,
        role: user.role,
      };
      setSpinner(true);
      AuthService.register(userSubmit).then((data) => {
        const { message } = data;
        setMessage(message);
        resetForm();
        if (!message.msgError) {
          setSpinner(false);
          timerID = setTimeout(() => {
            history.push("/Giphy-app/login");
          }, 2000);
        }
        setSpinner(false);
      });
    }
  };

  // Validation
  const ValidationAll = () => {
    const msg = {};
    if (Validation.isEmpty(user.username))
      msg.username = "username is required";
    if (Validation.isEmpty(user.password))
      msg.password = "password is required";
    if (!Validation.equals(user.password, user.confirmPassword))
      msg.confirmPassword = "confirm password is not true";
    setValidation(msg);
    if (Object.keys(msg).length > 0) {
      return false;
    }
    return true;
  };
  const usernameError = validation.username ? true : false;
  const passwordError = validation.password ? true : false;
  const confirmError = validation.confirmPassword ? true : false;
  return (
    <div className="container-detail">
      <div className="register-container">
        <h1 style={{ marginBottom: 20 }}>Register</h1>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label for="exampleEmail">User</Label>
            <Input
              type="text"
              name="username"
              id="exampleEmail"
              value={user.username}
              placeholder="username"
              onChange={onChange}
              invalid={usernameError}
            />
            <FormFeedback>{validation.username}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              value={user.password}
              placeholder="password"
              onChange={onChange}
              invalid={passwordError}
            />
            <FormFeedback>{validation.password}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={user.confirmPassword}
              placeholder="confirm password"
              onChange={onChange}
              invalid={confirmError}
            />
            <FormFeedback>{validation.confirmPassword}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleRole">Role</Label>
            <Input
              type="text"
              name="role"
              id="exampleRole"
              value={user.role}
              placeholder="Role (admin/user)"
              onChange={onChange}
            />
          </FormGroup>
          <Button color="primary" style={{ marginTop: 20, marginBottom: 20 }}>
            Register
            {spinner ? (
              <Spinner
                color="light"
                size="sm"
                style={{ marginLeft: 10 }}
              ></Spinner>
            ) : (
              ""
            )}
          </Button>
          {message ? <Message message={message} /> : null}
        </Form>
      </div>
    </div>
  );
}

export default Register;
