import {ethers} from "ethers";
import {getProvider} from "./utils.js";
import sanfordNFTAbi from "./abi/sanfordNFTAbi.js";


const sanfordNFTAddress = "0x6E2756D5A4780c4d26De0A91f0c0AF5CE77cBC34";
const goerliProvider = getProvider();

const sanfordContract = new ethers.Contract(sanfordNFTAddress, sanfordNFTAbi, goerliProvider);

const mintPrice = await sanfordContract.MINT_PRICE();
console.log("SanfordStout NFT mint price:", ethers.utils.formatEther(mintPrice));