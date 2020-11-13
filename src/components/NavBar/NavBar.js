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
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };
  const Authenticated = () => {
    return (
      <>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/favorites">Favorites</Link>
        </NavItem>
        {user.role === "admin" ? (
          <NavItem>
            <Link to="/admin">Admin</Link>
          </NavItem>
        ) : null}
        <Button onClick={handleLogout}>Logout</Button>
      </>
    );
  };
  const unAuthenticated = () => {
    return (
      <>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/login">Login</Link>
        </NavItem>
        <NavItem>
          <Link to="/register">Register</Link>
        </NavItem>
      </>
    );
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/">
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
