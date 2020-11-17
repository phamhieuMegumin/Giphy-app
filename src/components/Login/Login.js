import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
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
  const [spinner, setSpinner] = useState(false);
  const [message, setMessage] = useState(null);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    AuthService.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;
      setSpinner(false);
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        history.push("/Giphy-app");
      } else {
        setMessage(message);
      }
    });
  };
  return (
    <div className="container-detail">
      <div className="login-container">
        <h1 style={{ marginBottom: 20 }}>Login</h1>
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
          <Button color="primary" style={{ marginTop: 20 }}>
            Login
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

export default Login;
