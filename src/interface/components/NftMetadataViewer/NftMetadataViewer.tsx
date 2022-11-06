import React from "react";
import { AnalyzedNftContract } from "../../../core/models/Analyzer/AnalyzedNftContract";
import { NftMetadataContract } from "../../../core/models/Nft/NftMetadataContract";

interface NftMetadataViewerProps {
  nftMetadata: NftMetadataContract;
  analyzedData: AnalyzedNftContract | undefined;
}

export function NftMetadataViewer({ nftMetadata, analyzedData }: NftMetadataViewerProps) {
  return (
    <div className="nft-metadata-viewer-container">
      {nftMetadata?.imageUrl && (
        <div>
          <img src={nftMetadata?.imageUrl} alt="NFT"></img>
        </div>
      )}
      <div>
        <h3>{nftMetadata?.name}</h3>
        <p>{nftMetadata?.description}</p>
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
          <b>{analyzedData?.isDecentralized ? "Descentralized Server" : "Centralized Server"}</b>
        </p>
      </div>
    </div>
  );
}
