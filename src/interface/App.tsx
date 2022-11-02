import React from "react";
import { useEffect, useState } from "react";
import { NftMetadataAnalyzer } from "../core/analyzer/NftMetadataAnalyzer";
import { MarketplaceFactory } from "../core/factory/MarketplaceFactory";
import { AnalyzedNftContract } from "../core/models/Analyzer/AnalyzedNftContract";
import { NftMetadataContract } from "../core/models/Nft/NftMetadataContract";
import { HttpServiceWrapper } from "../core/services/HttpServiceWrapper";
import Web3Service from "../core/services/Web3Service";
import { NftMetadataViewer } from "./components/NftMetadataViewer";

function App() {
  const [url, setUrl] = useState("");
  const [nftAddress, setNftAddress] = useState("");
  const [nftTokenId, setNftTokenId] = useState("");
  const [nftMetadata, setNftMetadata] = useState<NftMetadataContract>();
  const [isLoading, setIsLoading] = useState(false);
  const [analyzedData, setAnalyzedData] = useState<AnalyzedNftContract>();

  const { ethereum } = window as any;

  useEffect(() => {
    async function getMetadataFromNftUrl() {
      try {
        if (!url) {
          return;
        }
        setIsLoading(true);
        const nftUrl = new URL(url);
        const marketplace = new MarketplaceFactory(new HttpServiceWrapper(), nftUrl).create();
        const metadata = await marketplace.getMetadata(nftUrl);
        setNftMetadata(metadata);
        setAnalyzedData(
          NftMetadataAnalyzer.getHostingInformationFromUrl(
            new URL(metadata?.imageUrl ?? metadata!.imageUrl),
          ),
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getMetadataFromNftUrl();
  }, [url]);

  useEffect(() => {
    async function getMetadataFromNftAddressAndTokenId() {
      try {
        if (!(nftAddress && nftTokenId)) {
          return;
        }
        setIsLoading(true);
        const web3Service = Web3Service;
        const metadata = await web3Service.getNftMetadata(nftAddress, nftTokenId);
        setNftMetadata(metadata);
        setAnalyzedData(
          NftMetadataAnalyzer.getHostingInformationFromUrl(
            new URL(metadata?.imageUrl ?? metadata!.imageUrl),
          ),
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getMetadataFromNftAddressAndTokenId();
  }, [nftAddress, nftTokenId]);

  return (
    <div className="App">
      <h1>NFT Metadata Auditor</h1>

      <p>
        Paste a NFT page from OpenSea or Rarible here. Example:
        <a
          target="_blank"
          rel="noReferrer"
          href="https://opensea.io/assets/ethereum/0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91/9626"
        >
          https://opensea.io/assets/ethereum/0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91/9626
        </a>
      </p>
      <br />
      <input
        type="text"
        style={{ width: "550px" }}
        onChange={(e) => setUrl(e.target.value)}
      ></input>
      <br />

      {ethereum && (
        <div>
          <p>Or paste a NFT address here</p>
          <input
            type="text"
            style={{ width: "550px" }}
            onChange={(e) => setNftAddress(e.target.value)}
          ></input>
          <p>... and the token Id here</p>
          <input
            type="text"
            style={{ width: "100px" }}
            onChange={(e) => setNftTokenId(e.target.value)}
          ></input>
        </div>
      )}

      {isLoading && <div>Loading...</div>}
      {nftMetadata && <NftMetadataViewer nftMetadata={nftMetadata} analyzedData={analyzedData} />}
    </div>
  );
}

export default App;
