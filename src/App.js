import React, { useContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Todos from "./components/Todos/Favorites";
import Admin from "./Admin/Admin";
import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";
function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <UnPrivateRoute path="/register" component={Register} />
        <PrivateRoute
          path="/favorites"
          roles={["user", "admin"]}
          component={Todos}
        />
        <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
      </div>
    </Router>
  );
}

export default App;
