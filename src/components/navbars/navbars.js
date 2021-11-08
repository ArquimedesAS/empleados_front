import Dropdown from "@restart/ui/esm/Dropdown";
import React from "react";
import { Container, DropdownButton, Nav, Navbar } from "react-bootstrap";

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            {/*<Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Caracteristicas</Nav.Link>
            <Nav.Link href="#pricing">Precio</Nav.Link>*/}
          </Nav>

          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Serrar Sesion</Dropdown.Item>
            {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
          </DropdownButton>
        </Container>
      </Navbar>
    );
  }
}
