import React from "react";
import { useEffect, useState } from "react";
import { MarketplaceFactory } from "./factory/MarketplaceFactory";
import { NftMetadataContract } from "./models/Nft/NftMetadataContract";
import { HttpServices } from "./services/HttpServices";

function App() {
  const [url, setUrl] = useState("");
  const [nftMetadata, setNftMetadata] = useState<NftMetadataContract>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMetadataFromNftInCurrentPage() {
      try {
        if (!url) {
          return;
        }
        setIsLoading(true);
        const nftUrl = new URL(url);
        const marketplace = new MarketplaceFactory(new HttpServices()).create(
          nftUrl
        );
        const metadata = await marketplace.getMetadata(nftUrl);
        setNftMetadata(metadata);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getMetadataFromNftInCurrentPage();
  }, [url]);

  return (
    <div className="App">
      <h1>NFT Metadata Auditor</h1>

      <p>
        Paste an NFT page from OpenSea here. Example:
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
      {isLoading && <div>Loading...</div>}
      {nftMetadata && (
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div>
            <img
              src={nftMetadata?.imageUrl}
              alt="NFT"
              style={{ height: "200px", width: "auto", marginRight: "20px" }}
            ></img>
          </div>
          <div>
            <h3>{nftMetadata?.name}</h3>
            <p>{nftMetadata?.description}</p>
            <br />
            <p>
              <b>Address: </b> {nftMetadata?.address}
            </p>
            <p>
              <b>Image Url: </b>
              {nftMetadata?.imageUrl}
            </p>
            <p>
              <b>Created At: </b> {nftMetadata?.createdAt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
