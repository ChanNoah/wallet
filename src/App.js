import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './view/login/login';
import Pubsub from 'pubsub-js';
import { Container } from 'semantic-ui-react';
import Wallet from './view/wallet/wallet';

class App extends Component {

  state = {
    wallet: {},
    loginFlag: false,
  }

  componentDidMount() {
    Pubsub.subscribe('loginSuccessfully', this.loginSuccessfully);
  }

  loginSuccessfully = (message, data) => {
    console.log("message:", message);
    // console.log("wallet:", data); test
    this.setState({
      wallet: data,
      loginFlag: true,
    })
  }

  render() {
    let { wallet, loginFlag } = this.state;
    // console.log("wallet:", wallet); test
    let content = loginFlag ? <Wallet wallet={wallet} /> : <Login />;
    return <Container> {content} </Container>;
  }
}

export default App;
