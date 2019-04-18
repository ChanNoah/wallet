import React, { Component } from 'react';
import { Dimmer, Segment, Progress, Loader, Form, Button } from 'semantic-ui-react'
import controller from '../../controller/controller';
import PubSub from 'pubsub-js';

class KeyStore extends Component {

    state = {
        loading: false,
        progress: '',
        keyStore: '',
        password: '',
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    login = () => {
        let { keyStore, password, progress } = this.state;
        try {
            let wallet = controller.getWalletFromKeyStore(keyStore, password, (callback) => {
                this.setState({progress})
            });
            if (wallet) {
                PubSub.publish('loginSuccessfully', wallet);
                console.log('login successfully');
            }
        } catch (error) {
            alert('getWalletFromKeyStore', error);
        }
    }

    render() {
        return (
            <Dimmer.Dimmable as={Segment} dimmed={this.state.loading}>
                {this.state.progress && (
                    <Progress
                        style={{
                            width: "100%"
                        }}
                        percent={parseInt(this.state.progress * 100)}
                        inverted
                        success
                        progress
                    />
                )}
                <Dimmer active={this.state.loading} inverted>
                    <Loader active={this.state.loading} inline />
                </Dimmer>
                <Form size="large">
                    <Segment>
                        <Form.TextArea
                            placeholder="keystore is json form"
                            name="keyStore"
                            value={this.state.keyStore}
                            onChange={this.handleChange}
                        />

                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <Button
                            color="teal"
                            fluid
                            size="large"
                            onClick={this.login}
                        >
                            login
                    </Button>
                    </Segment>
                </Form>
            </Dimmer.Dimmable>

        )
    }
}

export default KeyStore;