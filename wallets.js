import "dotenv/config";
import {ethers} from "ethers";

// create a random wallet
const randomWallet = ethers.Wallet.createRandom();
console.log("address:", randomWallet.address);
// never expose your private key or your seed phrase a.k.a. mnemonic
console.log("private key:", randomWallet.privateKey);
console.log("mnemonic:", randomWallet.mnemonic.phrase);

let path, myRandomWallet;

// create following wallets that assigned to same mnemonic
for (let i = 0; i < 3; i++) {
    path = `m/44'/60'/0'/0/${i}`;
    myRandomWallet = ethers.Wallet.fromMnemonic(randomWallet.mnemonic.phrase, path);
    console.log("address:", i, myRandomWallet.address);
    console.log("private key:", i, myRandomWallet.privateKey);
}

// get my wallet through private key
const myWallet = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY);
console.log("My wallet address:", myWallet.address);
console.log("Is signer?:", myWallet._isSigner);

// sign a message
const message = "Hello World3!";
const signature = await myWallet.signMessage(message);
console.log("Signed message:", signature);

// verify message and prove signer address is my wallet address
const signerAddress = ethers.utils.verifyMessage(message, signature);
console.log("signerAddress:", signerAddress);
console.log("signerAddress is matching:", signerAddress === myWallet.address);