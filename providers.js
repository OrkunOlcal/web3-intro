import "dotenv/config";
import {ethers} from "ethers";

const alchemyUrl = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`;

const provider = new ethers.providers.JsonRpcProvider(alchemyUrl);

console.log("Current block number:", await provider.getBlockNumber());
