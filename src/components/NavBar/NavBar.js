import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import AuthServices from "../../Services/AuthServices";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
function ShowNavBar() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(
    AuthContext
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    AuthServices.logout().then((data) => {
      if (data.success) {
        console.log("remove");
        localStorage.removeItem("auth_token");
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };
  const Authenticated = () => {
    return (
      <>
        <NavItem>
          <Link to="/Giphy-app">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/Giphy-app/favorites">Favorites</Link>
        </NavItem>
        {user.role === "admin" ? (
          <NavItem>
            <Link to="/Giphy-app/admin">Admin</Link>
          </NavItem>
        ) : null}
        <NavItem>
          <a
            href=" # "
            onClick={handleLogout}
            style={{ cursor: "pointer", position: "absolute", right: 20 }}
          >
            Logout
          </a>
        </NavItem>
      </>
    );
  };
  const unAuthenticated = () => {
    return (
      <>
        <NavItem>
          <Link to="/Giphy-app">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/Giphy-app/login">Login</Link>
        </NavItem>
        <NavItem>
          <Link to="/Giphy-app/register">Register</Link>
        </NavItem>
      </>
    );
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/Giphy-app">
          <NavbarBrand>Logo</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {!isAuthenticated ? unAuthenticated() : Authenticated()}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default ShowNavBar;
