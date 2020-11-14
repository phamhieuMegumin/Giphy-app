import React, { useEffect, useRef, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import AuthService from "../../Services/AuthServices";
import { useHistory } from "react-router-dom";
import Message from "../Message/Message";
import "./Register.css";
function Register() {
  const [user, setUser] = useState({ username: "", password: "", role: "" });
  const [message, setMessage] = useState(null);
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
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          history.push("/Giphy-app/login");
        }, 2000);
      }
    });
  };
  return (
    <div className="register-container">
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
        <Button>Register</Button>
        {message ? <Message message={message} /> : null}
      </Form>
    </div>
  );
}

export default Register;
