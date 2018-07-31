import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Button } from 'reactstrap';
import './CSS/style.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" style={{ padding: '10px' }}>
          <NavbarBrand className="navbar-brand" href="/">
            <img
              height="50px"
              src="http://i63.tinypic.com/oid9xu.png"
              alt="hore"
            />
          </NavbarBrand>
          <NavbarBrand href="/">Santren Koding</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Kajian Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Santren Kilat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Mondok</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Tentang Kami</NavLink>
              </NavItem>
              <Button outline color="primary">
                Login/Signup
              </Button>{' '}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
