import React, { Component } from 'react';
import Account from './account'
import { ethers } from 'ethers';
import Transaction from './transaction';
import controller from '../../controller/controller';
import Edit from './edit';

class Wallet extends Component {

    constructor(props) {
        super(props)

        this.state = {
            wallet: props.wallet,

            address: '',
            balance: 0,
            transaction: 0,

            activedWallet: '',
        }
    }

    componentDidMount() {
        this.updateWallet()
    }

    async updateWallet() {
        // 1 get 
        let wallet = this.state.wallet;
        // console.log('wallet:', wallet);

        // 2 provider
        let provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')

        // 3 connect
        let activedWallet = wallet.connect(provider);
        // console.log('activedWallet:', activedWallet);

        // 4 infos
        let address = await activedWallet.getAddress();
        let balance = await activedWallet.getBalance();
        let transaction = await activedWallet.getTransactionCount();
        console.log('address:', address);
        console.log('balance:', ethers.utils.formatEther(balance));
        console.log('transaction:', transaction);

        // 5 set
        this.setState({ address, balance, transaction, activedWallet });
    }

    Send = async (amount, receiver) => {
        if (!controller.checkeAddress(receiver)) {
            alert('invalid receiver')
            console.log("invalid receiver")
            return
        }

        if (isNaN(amount)) {
            alert('invalid amount')
            console.log("invalid amount")
            return
        }

        let activedWallet = this.state.activedWallet;

        let total = ethers.utils.parseEther(amount);

        try {
            let res = await activedWallet.sendTransaction({
                to: receiver,
                value: total,
            });

            alert('transfered successfully')
            console.log("transfered successfully", res);

            this.updateWallet();

        } catch (error) {
            alert('transfered successfully')
            console.log("Transfer error", error);
        }
    };

    render() {
        return (
            <div>
                <Account infos={this.state} />
                <br />
                <Transaction Send={this.Send} />
                <br />
                {this.state.activedWallet && (
                    <Edit activedWallet={this.state.activedWallet} />
                )}
            </div>
        )
    }
}

export default Wallet;