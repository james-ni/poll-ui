import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import GuestRoute from './routes/GuestRoute';
import UserRoute from './routes/UserRoute';
import { useAuth0 } from './react-auth0-spa';

import Navbar from './components/Navbar';
import Home from './components/Home';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import NewPoll from './components/NewPoll';
import setAuthorizationHeader from './utils/setAuthorizationHeader';
import history from './utils/history';

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // constructor(props) {
  //   super(props);

  //   let token = localStorage.getItem('TOKEN');
  //   if (token) {
  //     setAuthorizationHeader(token);

  //     const user = jwt.decode(token);
  //     this.state = {
  //       ...user,
  //       authenticated: true
  //     };
  //   } else {
  //     this.state = {
  //       authenticated: false,
  //       username: '',
  //       email: ''
  //     };
  //   }
  // }

  const onLogout = () => {
    setAuthorizationHeader();
    // this.props.history.push('/login');
  };

  const onLogin = token => {
    localStorage.setItem('TOKEN', token);
    setAuthorizationHeader(token);
    const user = jwt.decode(token);
    // this.setState({
    //   email: user.email,
    //   username: user.username,
    //   authenticated: true,
    // });
    // this.props.history.push('/');
  };

  return (
    <Fragment>
      <Router history={history}>
        <Navbar />
        <Switch>
          <UserRoute path="/" exact component={Home} />
          {/* <GuestRoute
            path="/login"
            exact
            onLogin={onLogin}
            component={Login}
            authenticated={isAuthenticated}
          />
          <GuestRoute
            path="/signup"
            exact
            onSignup={onLogin}
            component={Signup}
            authenticated={isAuthenticated}
          />
          <UserRoute
            path="/newpoll"
            exact
            component={NewPoll}
            authenticated={isAuthenticated}
          /> */}
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
