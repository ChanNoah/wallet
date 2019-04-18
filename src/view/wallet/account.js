import React from 'react';
import { Header, Segment, Form, Image } from 'semantic-ui-react'

let Account = props => {

    let { address, balance, transaction } = props.infos;

    return (
        <div>
            <Header as="h2" color="teal" textAlign="center">
                <Image src="images/logo.png" /> ETH Wallet
            </Header>
            <Segment stacked textAlign="left">
                <Header as="h1">Account</Header>
                <Form.Input
                    style={{ width: "100%" }}
                    action={{
                        color: "teal",
                        labelPosition: "left",
                        icon: "address card",
                        content: "address"
                    }}
                    actionPosition="left"
                    value={address}
                />
                <br />
                <Form.Input
                    style={{ width: "100%" }}
                    action={{
                        color: "teal",
                        labelPosition: "left",
                        icon: "ethereum",
                        content: "balance"
                    }}
                    actionPosition="left"
                    value={balance}
                />
                <br />
                <Form.Input
                    actionPosition="left"
                    action={{
                        color: "teal",
                        labelPosition: "left",
                        icon: "numbered list",
                        content: "transac"
                    }}
                    style={{ width: "100%" }}
                    value={transaction}
                />
            </Segment>
        </div>
    )
}

export default Account;