import "dotenv/config";
import {ethers} from "ethers";


const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;

// providers are for reading data from the blockchain we need assigner to write or send any transactions
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// get latest block number
console.log("Current block number:", await provider.getBlockNumber());

// ens to account address
console.log("atg.eth is:", await provider.resolveName("atg.eth"));

// account address to ens
console.log("0xc4ac4174aa9a93d9eef02621ce8205c75d003de5 is:", await provider.lookupAddress("0xc4ac4174aa9a93d9eef02621ce8205c75d003de5"));

// numbers are on ethereum are so big that js can't even track them
console.log("vitalik.eth has:", await provider.getBalance("vitalik.eth"));
// get balance. you can either use ens or address
console.log("vitalik.eth has:", (await provider.getBalance("vitalik.eth")).toString());

const vitalikBalance = await provider.getBalance("vitalik.eth");
// get the number as the human-readable ETH number
console.log("vitalik.eth has:", ethers.utils.formatEther(vitalikBalance));

// calculate eth as wei
console.log("1.5 ETH is:", ethers.utils.parseEther("1.5").toString(), "wei");
console.log("1.5 ETH is:", ethers.utils.formatEther(ethers.utils.parseEther("1.5")));

let sanfordBalance = await provider.getBalance("sanfordstout.eth");

// sanfordBalance = sanfordBalance.add(ethers.utils.parseEther("5000"));

// comparison between big numbers
if (vitalikBalance.gt(sanfordBalance)) {
    console.log("Vitalik has more ETH than Sanford.");
} else {
    console.log("That's not possible!");
}
