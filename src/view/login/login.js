import React, { Component } from 'react'
import { Tab, Grid, Header, Image } from 'semantic-ui-react'
import PrivateKey from './privateKey';
import Mnemonic from './mnemonic';
import KeyStore from './keyStore';

const panes = [
    { menuItem: 'PrivateKey', render: () => <Tab.Pane><PrivateKey /></Tab.Pane> },
    { menuItem: 'Mnemonic', render: () => <Tab.Pane><Mnemonic /></Tab.Pane> },
    { menuItem: 'KeyStore', render: () => <Tab.Pane><KeyStore /></Tab.Pane> },
]

class Login extends Component {
    render() {
        return (
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450, marginTop: 100 }}>
                    <Header as="h2" color="teal" textAlign="center">
                        <Image src="images/logo.png" /> ETH Wallet
            </Header>
                    <Tab
                        menu={{ text: true }}
                        panes={panes}
                        style={{ maxWidth: 450 }}
                    />
                </Grid.Column>
            </Grid>
        );
    }
}

export default Login;
