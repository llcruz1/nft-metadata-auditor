import React from "react";
import { AnalyzedNftContract } from "../../core/models/Analyzer/AnalyzedNftContract";
import { NftMetadataContract } from "../../core/models/Nft/NftMetadataContract";

interface NftMetadataViewerProps {
  nftMetadata: NftMetadataContract;
  analyzedData: AnalyzedNftContract | undefined;
}

export function NftMetadataViewer({ nftMetadata, analyzedData }: NftMetadataViewerProps) {
  return (
    <div style={{ display: "flex", marginTop: "20px" }}>
      {nftMetadata?.imageUrl && (
        <div>
          <img
            src={nftMetadata?.imageUrl}
            alt="NFT"
            style={{ height: "200px", width: "auto", marginRight: "20px" }}
          ></img>
        </div>
      )}
      <div>
        <h3>{nftMetadata?.name}</h3>
        <p>{nftMetadata?.description}</p>
        <br />
        <p>
          <b>Address: </b> {nftMetadata?.address}
        </p>
        <p>
          <b>Metadata Url: </b>
          {nftMetadata?.jsonMetadataUrl}
        </p>
        {nftMetadata?.imageUrl && (
          <p>
            <b>Image Url: </b>
            {nftMetadata?.imageUrl}
          </p>
        )}
        <p>
          <b>{analyzedData?.isDescentralized ? "Descentralized Server" : "Centralized Server"}</b>
        </p>
      </div>
    </div>
  );
}
