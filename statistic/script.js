const { MarketplaceFactory } = require("./build2/factory/MarketplaceFactory");
const { HttpServiceWrapper } = require("./build2/services/Http/HttpServiceWrapper");
const { Web3ServiceWrapper } = require("./build2/services/Web3/Web3ServiceWrapper");
const { NftMetadataAnalyzer } = require("./build2/analyzer/NftMetadataAnalyzer");

const ether = require("ethers");
const provider = require("@metamask/providers");

const sample = require("./sample.json");

const sampleUrls = sample.urls.map(x => new URL(x));

async function getMetadata(m, nftUrl) {
    const metadata = await m.getMetadata(nftUrl);
    return metadata;
}

function getCsvLine(url, metadata, analyze) {
    return `${url?.href};${metadata?.address};${metadata?.tokenId};${metadata?.jsonMetadataUrl};${analyze?.isDecentralized}`;
}


async function getReport() {
    var reportLines = [];
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

async function downloadReport(name = 'report') {
    name = `${report}.csv`;

    var report = await getReport();

    var url = URL.createObjectURL(new Blob([report]));
  
    const link = document.createElement("a");
  
    link.href = url;
    link.download = name;
  
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
}

window.downloadReport = downloadReport;
