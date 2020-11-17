import React, { useEffect, useRef, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import AuthService from "../../Services/AuthServices";
import { useHistory } from "react-router-dom";
import Message from "../Message/Message";
import "./Register.css";
function Register() {
  const [user, setUser] = useState({ username: "", password: "", role: "" });
  const [message, setMessage] = useState(null);
  const [spinner, setSpinner] = useState(false);
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
    setUser({ username: "", password: "", role: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    AuthService.register(user).then((data) => {
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
  };
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
            />
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
            />
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
