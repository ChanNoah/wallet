import React, { Component } from 'react';
import { Segment, Header, Form, Progress, Button } from 'semantic-ui-react';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: '',
            activedWallet: props.activedWallet,
        };
    }

    exportPrivateKey = () => {
        let wallet = this.state.activedWallet;
        console.log(wallet.privateKey)
    }

    render() {
        return (
            <Segment stacked textAlign="left">
                <Header as="h1"> Setting </Header>
                <Form.Input
                    style={{
                        width: "100%"
                    }}
                    action={{
                        color: "teal",
                        labelPosition: "left",
                        icon: "lock",
                        content: "password"
                    }}
                    actionPosition="left"
                    type="password"
                    name="password"
                    required
                    value={this.state.password}
                    placeholder="password"
                    onChange={this.handleChange}
                />
                <br />
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
                <Button
                    color="twitter"
                    style={{ width: "50%" }}
                    onClick={this.exportPrivateKey}
                >
                    export private key
                </Button>
                <Button
                    color="twitter"
                    style={{
                        width: "49%"
                    }}
                    onClick={this.exportKeyStore}
                // loading={this.state.exportLoading}
                >
                    export keystore
                </Button>
            </Segment>
        );
    }
}
export default Edit;
