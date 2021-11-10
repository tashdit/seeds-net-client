import React from 'react';
import "./Navigation.css"
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar sticky="top" className="header" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="logo"> <h1><a href="/">Seeds Net</a></h1> </Navbar.Brand>
                    <Navbar.Toggle style={{ background: "#fff" }} />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className="nav-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
                        <Nav.Link as={Link} to="/MyRids" className="nav-link">Explor</Nav.Link>
                        <Nav.Link as={Link} to="/DashBorad" className="nav-link">Our Services</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="nav-link">Log In</Nav.Link>
                        <Navbar.Text className="userName">
                        </Navbar.Text>
                        <Nav.Link as={Link} to="/register" className="nav-link register">Registar</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;