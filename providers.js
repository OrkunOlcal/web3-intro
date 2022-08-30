import "dotenv/config";
import {ethers} from "ethers";

const infuraApiKey = process.env.INFURA_KEY;

const infuraUrl = `https://mainnet.infura.io/v3/${infuraApiKey}`;

const provider = new ethers.providers.InfuraProvider("homestead", infuraApiKey);

console.log("Current block number:", await provider.getBlockNumber());
