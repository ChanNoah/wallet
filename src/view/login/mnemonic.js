import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react'
import controller from '../../controller/controller';
import PubSub from 'pubsub-js';

class Mnemonic extends Component {

    state = {
        mnemonic: '',
        hdPath: "m/44'/60'/0'/0/1",
        wallet: '',
    }

    createMnemonicRandomly = () => {
        let mnemonic = controller.createMnemonicRandomly();
        this.setState({
            mnemonic: mnemonic
        });
    };

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    login = () => {
        let { mnemonic } = this.state;

        try {
            let wallet = controller.getWalletFromMnemonic(mnemonic);

            if (wallet) {
                this.setState({ wallet });
                PubSub.publish('loginSuccessfully', wallet);
                console.log('login successfully')
            }
            
        } catch (error) {
            alert("getWalletFromMnemonic", error);
        }
    }

    render() {
        return (
            <Form size="large">
                <Segment stacked>
                    <Form.TextArea
                        placeholder="12 words"
                        name="mnemonic"
                        value={this.state.mnemonic}
                        onChange={this.handleChange}
                    />{" "}
                    <Form.Input
                        fluid
                        // placeholder=""
                        icon="user"
                        iconPosition="left"
                        name="hdPath"
                        value={this.state.hdPath}
                        onChange={this.handleChange}
                    />{" "}
                    <Button onClick={this.createMnemonicRandomly}> create mnemonic randomly </Button>{" "}
                    <br />
                    <br />
                    <Form.Button
                        onClick={this.login}
                        color="teal"
                        fluid
                        size="large"
                    >
                        login {" "}
                    </Form.Button>{" "}
                </Segment>{" "}
            </Form>
        );
    }
}

export default Mnemonic