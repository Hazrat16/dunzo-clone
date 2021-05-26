import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="pb-5">
      <Navbar fixed="top" expand="lg"  style={{paddingLeft:'130px',paddingRight:'130px',backgroundColor:'white',color:'black',fontWeight:'bold'}}>
        <Navbar.Brand href="#">
          <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-4d2d81aefcf296bc100d9edc114c2ea5.png" alt="" style={{width:'100px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Set Location" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav >
            <Nav.Link href="#deets" className="px-4">Dunzo for Partners</Nav.Link>
            <Nav.Link href="#deets" className="px-4">Need Delivery Partners</Nav.Link>
            <Nav.Link href="#deets" className="px-4"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
            <button className="signInButton">Sign In</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;