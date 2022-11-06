import React from "react";
import { useEffect, useState } from "react";
import { NftMetadataAnalyzer } from "../core/analyzer/NftMetadataAnalyzer";
import { TokenStandardEnum } from "../core/enums/TokenStandardEnum";
import { MarketplaceFactory } from "../core/factory/MarketplaceFactory";
import { AnalyzedNftContract } from "../core/models/Analyzer/AnalyzedNftContract";
import { NftMetadataContract } from "../core/models/Nft/NftMetadataContract";
import HttpServiceWrapper from "../core/services/Http/HttpServiceWrapper";
import Web3Service from "../core/services/Web3/NftMetadataService";
import Web3ServiceWrapper from "../core/services/Web3/Web3ServiceWrapper";
import { NftMetadataViewer } from "./components/NftMetadataViewer";
import { DebounceInput } from "react-debounce-input";

function App() {
  const [url, setUrl] = useState("");
  const [nftAddress, setNftAddress] = useState("");
  const [nftTokenId, setNftTokenId] = useState("");
  const [nftTokenStandard, setNftTokenStandard] = useState<TokenStandardEnum>(
    TokenStandardEnum.ERC721,
  );
  const [nftMetadata, setNftMetadata] = useState<NftMetadataContract | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analyzedData, setAnalyzedData] = useState<AnalyzedNftContract>();

  const tokenStandards = Object.values(TokenStandardEnum);
  const { ethereum } = window;

  useEffect(() => {
    async function getMetadataFromNftMarketplaceUrl() {
      try {
        if (!url) {
          return;
        }
        setIsLoading(true);
        const nftUrl = new URL(url);
        const marketplace = new MarketplaceFactory(
          Web3ServiceWrapper,
          HttpServiceWrapper,
          nftUrl,
        ).create();
        const metadata = await marketplace.getMetadata(nftUrl);
        setNftMetadata(metadata);
        setAnalyzedData(
          NftMetadataAnalyzer.getHostingInformationFromUrl(
            new URL(metadata?.jsonMetadataUrl ?? metadata!.jsonMetadataUrl),
            metadata?.imageUrl ? new URL(metadata.imageUrl) : null,
          ),
        );
      } catch (error) {
        console.log(error);
        setNftMetadata(null);
      } finally {
        setIsLoading(false);
      }
    }

    getMetadataFromNftMarketplaceUrl();
  }, [url]);

  useEffect(() => {
    async function getMetadataFromNftProperties() {
      try {
        if (!(nftAddress && nftTokenId && nftTokenStandard)) {
          return;
        }
        setIsLoading(true);
        const web3Service = Web3Service;
        const metadata = await web3Service.getNftMetadata(nftAddress, nftTokenId, nftTokenStandard);
        setNftMetadata(metadata);
        setAnalyzedData(
          NftMetadataAnalyzer.getHostingInformationFromUrl(
            new URL(metadata?.jsonMetadataUrl ?? metadata!.jsonMetadataUrl),
            metadata?.imageUrl ? new URL(metadata.imageUrl) : null,
          ),
        );
      } catch (error) {
        console.log(error);
        setNftMetadata(null);
      } finally {
        setIsLoading(false);
      }
    }

    getMetadataFromNftProperties();
  }, [nftAddress, nftTokenId, nftTokenStandard]);

  if (!ethereum) {
    return (
      <h1>
        You need Metamask installed to use this application.
        <a target="_blank" rel="noReferrer" href="https://metamask.io/download/">
          Download it here
        </a>{" "}
      </h1>
    );
  }

  return (
    <div className="App">
      <h1>NFT Metadata Auditor</h1>

      {!ethereum ? (
        <h1>
          You need Metamask installed to use this application.
          <a target="_blank" rel="noReferrer" href="https://metamask.io/download/">
            Download it here
          </a>
        </h1>
      ) : (
        <>
          <p>
            Paste a NFT page from OpenSea or Rarible here. Example:{" "}
            <a
              target="_blank"
              rel="noReferrer"
              href="https://opensea.io/assets/ethereum/0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91/9626"
            >
              https://opensea.io/assets/ethereum/0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91/9626
            </a>
          </p>
          <br />
          <DebounceInput
            debounceTimeout={500}
            type="text"
            style={{ width: "550px" }}
            onChange={(e) => setUrl(e.target.value)}
          ></DebounceInput>
          <br />

          <div>
            <p>Or paste a NFT address here</p>
            <DebounceInput
              debounceTimeout={500}
              type="text"
              style={{ width: "550px" }}
              onChange={(e) => setNftAddress(e.target.value)}
            ></DebounceInput>
            <p>... and the token Id here</p>
            <DebounceInput
              debounceTimeout={500}
              type="text"
              style={{ width: "100px" }}
              onChange={(e) => setNftTokenId(e.target.value)}
            ></DebounceInput>
            <p>... and select the token standard here</p>
            <select
              style={{ width: "100px" }}
              onChange={(e) => setNftTokenStandard(e.target.value as TokenStandardEnum)}
            >
              {tokenStandards.map((tokenStandard) => (
                <>
                  <option key={tokenStandard} value={tokenStandard}>
                    {tokenStandard}
                  </option>
                </>
              ))}
            </select>
          </div>

          {isLoading && <div>Loading...</div>}
          {nftMetadata && (
            <NftMetadataViewer nftMetadata={nftMetadata} analyzedData={analyzedData} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
