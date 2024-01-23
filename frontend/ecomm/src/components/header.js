// imported react-bootstrap 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
// imported react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import NavLink from 'react-bootstrap/esm/NavLink';

function Header() {
  return (
    // here i used fragment tag in wjich enclose all the code 
    <>
      <div class="annoucement-bar">
        <p class="text-center py-2 m-0 animate__backInLeft animate__animated wow">20% Exclusive Sale on every product</p>
      </div>
      <Navbar className="bg-body-tertiary justify-content-between" style={{ maxHeight: '50px', overflow: 'hidden' }}>
        <Form inline>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
      {/* i used two navbar one for sreaching purpose and one for all links  */}
      <Navbar bg="info" sticky="top" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand href="/product">e-com</Navbar.Brand>
          <Nav >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown href="/product" title="products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Dresses</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Make Overs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign-up</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavLink to='/profile' ><NavDropdown title="profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">User</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Admin</NavDropdown.Item>
            </NavDropdown></NavLink>


            {/* font awesome icon for cart */}
            <Nav.Link href="/cart"><FontAwesomeIcon className="cart" icon={faCartShopping} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
