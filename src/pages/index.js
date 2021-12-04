import React from "react"

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

// import components
import { Navbar, Container, Nav } from "react-bootstrap"

export default function Home() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid={true} className="section1"></Container>

      <Container fluid={true} className="section2"></Container>

      <Container fluid={true} className="section3"></Container>
    </div>
  )
}
