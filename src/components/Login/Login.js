import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import AuthService from "../../Services/AuthServices";
import { AuthContext } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";
import Message from "../Message/Message";
import "./Login.css";
function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const test = {
    username: "phamquanghieu8820",
    password: "123456",
  };
  const onSubmit = (e) => {
    e.preventDefault();

    AuthService.login(test).then((data) => {
      // console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        history.push("/");
      } else {
        setMessage(message);
      }
    });
  };
  return (
    <div className="login-container">
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input
            type="text"
            name="username"
            id="exampleEmail"
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
            placeholder="password"
            onChange={onChange}
          />
        </FormGroup>
        <Button>Login</Button>
        {message ? <Message message={message} /> : null}
      </Form>
    </div>
  );
}

export default Login;
