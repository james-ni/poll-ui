import React, { Component } from 'react';
import {
  Menu,
  Container,
  Visibility,
  Icon,
  Dropdown,
  Header,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

const guestMenu = loginWithRedirect => {
  // const { location } = this.props;

  return (
    <Container text>
      <Menu.Item>
        <Link to="/">Poll App</Link>
      </Menu.Item>
      <Menu.Item
        color="blue"
        position="right"
        onClick={() => loginWithRedirect({})}
        // active={location.pathname === '/login'}
      >
        Login
      </Menu.Item>
      <Menu.Item
        as={Link}
        color="blue"
        to="/signup"
        name="/signup"
        // active={location.pathname === '/signup'}
      >
        Signup
      </Menu.Item>
    </Container>
  );
};

const userMenu = logout => {
  // const { location } = this.props;

  return (
    <Container text>
      <Menu.Item>
        <Link to="/">Poll App</Link>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/"
        color="blue"
        position="right"
        // active={location.pathname === '/'}
      >
        <Icon name="home" />
      </Menu.Item>
      <Menu.Item
        as={Link}
        color="blue"
        to="/newpoll"
        // active={location.pathname === '/newpoll'}
      >
        <Icon name="chart bar" />
      </Menu.Item>
      {/* <Menu.Item color="blue" active={location.pathname === '/signup'}> */}
      <Menu.Item color="blue">
        <Dropdown trigger={<Icon name="user" />}>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Header content="Ningning Ni" subheader="@guangtoutou" />
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item text="Profile" />
            <Dropdown.Item text="Logout" onClick={() => logout()} />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </Container>
  );
};

const Navbar = props => {
  // constructor(props) {
  //   super(props);
  //   this.state = { menuFixed: false, activeItem: 'login' };
  // }
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // const { menuFixed, activeItem } = this.state;
  const a = 111;
  return (
    <Menu pointing secondary fixed="top" style={{ backgroundColor: 'white' }}>
      {isAuthenticated ? userMenu(logout) : guestMenu(loginWithRedirect)}
    </Menu>
  );
};
export default Navbar;
