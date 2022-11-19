import {BigNumber, ethers} from "ethers";
import {getProvider, getSigner} from "./utils.js";

const goerliInfuraProvider = getProvider();
const goerliSigner = getSigner();

const myBalance = await goerliInfuraProvider.getBalance(goerliSigner.address);

console.log("Goerli address and balance:", goerliSigner.address, ethers.utils.formatEther(myBalance), "ETH");
// process.exit();

const tx = await goerliSigner.sendTransaction({
    to: process.env.MY_TEST_METAMASK_WALLET_ADDRESS,
    value: myBalance.div(BigNumber.from(10))
});

console.log("Transaction sent!", `https://goerli.etherscan.io/tx/${tx.hash}`);
console.log("Transaction details:", tx);

await tx.wait();

console.log("Transaction mined!");