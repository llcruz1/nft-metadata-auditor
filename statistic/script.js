const { MarketplaceFactory } = require("./build/factory/MarketplaceFactory");
const { HttpServiceWrapper } = require("./build/services/Http/HttpServiceWrapper");
const { Web3ServiceWrapper } = require("./build/services/Web3/Web3ServiceWrapper");
const { NftMetadataAnalyzer } = require("./build/analyzer/NftMetadataAnalyzer");

const ether = require("ethers");
const provider = require("@metamask/providers");

// const sample = require("./sample.json");

async function getMetadata(m, nftUrl) {
    const metadata = await m.getMetadata(nftUrl);
    return metadata;
}

function getCsvLine(url, metadata, analyze) {
    var jsonMetadataUrl = metadata?.jsonMetadataUrl;
    if(metadata !== undefined && metadata.jsonMetadataUrl.startsWith("data:application/json"))
    {
        jsonMetadataUrl = "data:application/json"
    }

    return `${url?.href};${metadata?.address};${metadata?.tokenId};${jsonMetadataUrl};${analyze?.isDecentralized}`;
}


async function getReport(datasetJson) {
    
    const sampleUrls = datasetJson.urls.map(x => new URL(x));

    var reportLines = [];
    
    reportLines.push("Marketplace;Address;TokenID;MetadataURL;Decentralized");

    var rawReport = '';

    for (let x of sampleUrls) {
        var csvLine ='';
        try {
            var marketplace = new MarketplaceFactory(
                new Web3ServiceWrapper(),
                new HttpServiceWrapper(),
                x
            ).create();

            var metadata = await getMetadata(marketplace, x)

            var analyze = NftMetadataAnalyzer.checkIfUrlIsDecentralized(
                new URL(metadata?.jsonMetadataUrl ?? metadata.jsonMetadataUrl),
                metadata?.imageUrl ? new URL(metadata.imageUrl) : null,
            )

            csvLine = getCsvLine(x, metadata, analyze);
        } catch (error) {
            csvLine = getCsvLine(x, undefined, undefined);
            console.log(error);
        }
        reportLines.push(csvLine);
    }

    rawReport = reportLines.join("\n");

    return rawReport;
}

async function downloadReport(datasetJson, name = 'report') {
    name = `${name}.csv`;

    var report = await getReport(datasetJson);

    var url = URL.createObjectURL(new Blob([report]));
  
    const link = document.createElement("a");
  
    link.href = url;
    link.download = name;
  
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
}

window.downloadReport = downloadReport;
