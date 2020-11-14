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
        <Route exact path="/Giphy-app" component={Home} />
        <Route path="/Giphy-app/login" component={Login} />
        <UnPrivateRoute path="/Giphy-app/register" component={Register} />
        <PrivateRoute
          path="/Giphy-app/favorites"
          roles={["user", "admin"]}
          component={Todos}
        />
        <PrivateRoute
          path="/Giphy-app/admin"
          roles={["admin"]}
          component={Admin}
        />
      </div>
    </Router>
  );
}

export default App;
