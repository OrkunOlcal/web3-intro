import {BigNumber, ethers} from "ethers";
import {getProvider, getSigner} from "./utils.js";

const rinkebyInfuraProvider = getProvider();
const rinkebySigner = getSigner();

const myBalance = await rinkebyInfuraProvider.getBalance(rinkebySigner.address);

console.log("Rinkeby address and balance:", rinkebySigner.address, ethers.utils.formatEther(myBalance), "ETH");
// process.exit();

const tx = await rinkebySigner.sendTransaction({
    to: process.env.MY_TEST_METAMASK_WALLET_ADDRESS,
    value: myBalance.div(BigNumber.from(10))
});

console.log("Transaction sent!", `https://rinkeby.etherscan.io/tx/${tx.hash}`);
console.log("Transaction details:", tx);

await tx.wait();

console.log("Transaction mined!");