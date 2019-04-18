import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import controller from '../../controller/controller';
import Pubsub from 'pubsub-js';

class PrivateKey extends Component {
  state = {
    privateKey: "",
    wallet: {},
  }

  //
  createPrivateKeyRandomly = () => {
    // let wallet = controller.createPrivateKeyRandomly();
    // this.setState({ wallet })
    // console.log(wallet.privateKey);

    let privateKey = controller.createPrivateKeyRandomly();
    this.setState({ privateKey });
    // console.log(privateKey);
  }

  //
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  //
  login = () => {
    let privateKey = this.state.privateKey;

    let err = controller.examPrivateKey(privateKey);
    if (err) {
      alert(err);
      return;
    }

    let wallet = controller.getWalletByPrivateKey(privateKey);

    if (wallet) {

      this.setState({ wallet });
      
      Pubsub.publish("loginSuccessfully", wallet);
    
    } else{

      console.log('login failed')

      alert('login failed')

    }
    // console.log(wallet);
  }


  render() {
    return (
      <div>
        <Form size="large">
          <Segment>
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="private key"
              name="privateKey"
              value={this.state.privateKey}
              onChange={this.handleChange}
            />{" "}
            <Button onClick={this.createPrivateKeyRandomly}> create private key randomly </Button>{" "}
            <br />
            <br />
            <Button
              color="teal"
              fluid
              size="large"
              onClick={this.login}
            >
              login {" "}
            </Button>{" "}
          </Segment>{" "}
        </Form>
      </div>
    );
  }
}

export default PrivateKey;
