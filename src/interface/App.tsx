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
import { NftMetadataViewer } from "./components/NftMetadataViewer/NftMetadataViewer";
import { DebounceInput } from "react-debounce-input";
import "./App.scss";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import toast, { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import MetamaskInstall from "./components/MetamaskInstall/MetamaskInstall";

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
  const [showModal, setShowModal] = useState(false);

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
        setShowModal(true);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
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
        setShowModal(true);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
        setNftMetadata(null);
      } finally {
        setIsLoading(false);
      }
    }

    getMetadataFromNftProperties();
  }, [nftAddress, nftTokenId, nftTokenStandard]);

  return (
    <div className="App">
      <Header />

      {!ethereum ? (
        <MetamaskInstall />
      ) : (
        <>
          <div className="nft-url-form">
            <label>Paste a NFT page from OpenSea or Rarible here</label>
            <DebounceInput
              debounceTimeout={500}
              type="text"
              placeholder="https://opensea.io/assets/ethereum/0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91/9626"
              onChange={(e) => setUrl(e.target.value)}
            ></DebounceInput>
          </div>

          <div className="form-separator">
            <p>...or paste NFT properties below</p>
          </div>

          <div className="nft-properties-form">
            <div className="nft-address-input">
              <label>Address</label>
              <DebounceInput
                debounceTimeout={500}
                type="text"
                onChange={(e) => setNftAddress(e.target.value)}
              ></DebounceInput>
            </div>
            <div className="nft-token-id-input">
              <label>Token Id</label>
              <DebounceInput
                debounceTimeout={500}
                type="text"
                onChange={(e) => setNftTokenId(e.target.value)}
              ></DebounceInput>
            </div>
            <div className="nft-token-standard-input">
              <label>Token Standard</label>
              <select onChange={(e) => setNftTokenStandard(e.target.value as TokenStandardEnum)}>
                {tokenStandards.map((tokenStandard) => (
                  <>
                    <option key={tokenStandard} value={tokenStandard}>
                      {tokenStandard}
                    </option>
                  </>
                ))}
              </select>
            </div>
          </div>

          {isLoading && <Loader showOverlay={true} />}
          {nftMetadata && (
            <Modal
              showModal={showModal}
              onClose={() => {
                setShowModal(false);
              }}
            >
              <NftMetadataViewer nftMetadata={nftMetadata} analyzedData={analyzedData} />
            </Modal>
          )}
        </>
      )}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default App;
