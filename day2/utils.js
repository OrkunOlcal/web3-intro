import "dotenv/config";
import {ethers} from "ethers";
import * as fs from "fs";


const getProvider = (mainnet = false) => {
    // const providerUrl = mainnet ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}` : `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`;
    const providerUrl = mainnet ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}` : `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`;
    return new ethers.providers.JsonRpcProvider(providerUrl);
};

// add here create fromMnemonic feature with parameter
const generateNewWallet = (walletPrefix) => {
    const randomWallet = ethers.Wallet.createRandom();
    // console.log("address:", randomWallet.address);
    // console.log("private key:", randomWallet.privateKey);
    // console.log("mnemonic:", randomWallet.mnemonic.phrase);
    saveToEnv(false, `${walletPrefix}_WALLET_ADDRESS`, randomWallet.privateKey)
    saveToEnv(false, `${walletPrefix}_WALLET_PRIVATE_KEY`, randomWallet.privateKey)
    saveToEnv(true, `${walletPrefix}_WALLET_MNEMONIC_PHRASE`, randomWallet.mnemonic.phrase)
};

const getSigner = (mainnet = false) => {
    const provider = getProvider(mainnet);
    return new ethers.Wallet(process.env.SIGNER_WALLET_PRIVATE_KEY, provider);
};

function saveToEnv(async, key, value) {
    const data = `\n${key}="${value}"`;
    if (async) {
        fs.appendFile('.env', data, function (err) {
            if (err) throw err;
        });
    } else {
        fs.appendFileSync('.env', data);
    }
}

// es6 module syntax
export {getProvider, generateNewWallet, getSigner};