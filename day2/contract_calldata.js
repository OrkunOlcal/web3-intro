import {ethers} from "ethers";
import {getSigner} from "./utils.js";


const sanfordNFTAddress = "0x6E2756D5A4780c4d26De0A91f0c0AF5CE77cBC34";
const rinkebySigner = getSigner();

const mintPrice = ethers.utils.parseEther("0.01");
const mintCalldata = "0x1249c58b"; //mint() method id

console.log("Minting NFT!");

const mintTx = await rinkebySigner.sendTransaction({
    to: sanfordNFTAddress,
    value: mintPrice,
    data: mintCalldata
});

console.log("TX sent:", mintTx.hash);

await mintTx.wait();

console.log("TX mined!");
