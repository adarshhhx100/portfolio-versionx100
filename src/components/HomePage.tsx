import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Hello: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Sir Adarsh Chaturvedi</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Projects</Nav.Link>
          <Nav.Link href="#features">Level Up!!</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Hello;
