import { ethers } from 'ethers';

let createPrivateKeyRandomly = () => {
    let wallet = ethers.Wallet.createRandom();

    // return wallet

    // let privateKey = wallet.privateKey
    // return privateKey;

    return wallet.privateKey;
};

let getWalletByPrivateKey = (privateKey) => {
    let wallet = new ethers.Wallet(privateKey);
    return wallet;
}

let createMnemonicRandomly = () => {
    let byte = ethers.utils.randomBytes(16);
    let mnemonic = ethers.utils.HDNode.entropyToMnemonic(byte);
    return mnemonic;
}

let getWalletFromMnemonic = (mnemonic) => {
    let hdPath = "m/44'/60'/0'/0/";
    let wallets = [];
    for (let i = 0; i < 10; i++) {
        let hdPathx = hdPath + i;
        let wallet = ethers.Wallet.fromMnemonic(mnemonic, hdPathx);
        wallets.push(wallet);
        console.log(wallet.address);
    };
    return wallets[0];
}

let getWalletFromKeyStore = (keyStore, password, callback) => {
    return new Promise( async (resolve, reject) => {
        try{
            let wallet = await ethers.Wallet.fromEncryptedJson(keyStore, password, callback)
            resolve(wallet)
        } catch(error) {
            reject(error);
            alert(error);
        }
    })
}

let examPrivateKey = (privateKey) => {
    if (privateKey === '') {
        return "Private key cannot be empty"
    }

    if (privateKey.length !== 66 && privateKey.length !== 64) {
        return "The length of private key must be 64 or 66"
    }

    if (!privateKey.match(/^(0x)?([0-9A-Fa-f]{64})$/)) {
        return "[0-9A-Fa-f] required"
    }

    return "";
}

let checkeAddress = (address) => {
    try {
        let acticedAddress = ethers.utils.getAddress(address);
        return acticedAddress
    } catch (error) {
        return ""
    }

}

//
let controller = {
    createPrivateKeyRandomly,
    getWalletByPrivateKey,

    createMnemonicRandomly,
    getWalletFromMnemonic,

    getWalletFromKeyStore,

    examPrivateKey,
    checkeAddress,
};

export default controller;
