import React, { Component } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

class Transaction extends Component {
    constructor (props) {
        super(props);

        this.state = {
            amount:0,
            receiver:'',

            Send: props.Send,
        }
    }
    
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
     
        // console.log('name:',name);
        // console.log('value:',value);
    }

    Send = () => {
        this.state.Send(this.state.amount, this.state.receiver);
    }

    render() {
        return (
            <Segment stacked textAlign="left">
                <Header as="h1"> Transfer or Withdraw </Header>{" "}
                <Form.Input
                    style={{
                        width: "100%"
                    }}
                    action={{
                        color: "teal",
                        labelPosition: "left",
                        icon: "address card",
                        content: "address"
                    }}
                    actionPosition="left"
                    defaultValue=""
                    type="text"
                    name="receiver"
                    required
                    value={this.state.receiver}
                    placeholder="receiver"
                    onChange={this.handleChange}
                />{" "}
                <br />
                <Form.Input
                    style={{
                        width: "100%"
                    }}
                    action={{
                        color: "teal",
                        labelPosition: "left",
                        icon: "ethereum",
                        content: "amount "
                    }}
                    actionPosition="left"
                    defaultValue=""
                    type="text"
                    name="amount"
                    required
                    value={this.state.amount}
                    placeholder="ether"
                    onChange={this.handleChange}
                />
                <br />
                <Button
                    color="twitter"
                    style={{
                        width: "100%"
                    }}
                    size="large"
                    // loading={this.state.loading}
                    onClick={this.Send}
                >
                    transfer
                </Button>
            </Segment>

        )
    }
}

export default Transaction;