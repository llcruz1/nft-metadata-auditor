const {MarketplaceFactory} = require("./build2/factory/MarketplaceFactory");
const {HttpServiceWrapper} = require("./build2/services/Http/HttpServiceWrapper");
const {Web3ServiceWrapper} = require("./build2/services/Web3/Web3ServiceWrapper");

const ether = require("ethers");
const provider = require("@metamask/providers");


const sample = require("./sample.json");

const opensea_sample = sample.opensea;

const sampleUrls = opensea_sample.map( x => new URL(x));

// const nftUrl = new URL("https://opensea.io/assets/ethereum/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258/54165");

// console.log(marketplace);

async function getMetadata(m, nftUrl)
{
    const metadata = await m.getMetadata(nftUrl);
    return metadata;
}

function getCsvLine(url, metadata)
{
    return `${url.host };${metadata.address};${metadata.tokenId};${metadata.jsonMetadataUrl};${true}`;
}
sampleUrls.forEach(async(x) => {
    try {
        var marketplace = new MarketplaceFactory(
            new Web3ServiceWrapper(),
            new HttpServiceWrapper(),
            x    
        ).create();
        
        var metadata = await getMetadata(marketplace, x);

        var csvLine = getCsvLine(x, metadata);
        console.log(csvLine);

    } catch (error) {
        console.log(error);
    }
});