import React from "react";
import { AnalyzedNftContract } from "../../../core/models/Analyzer/AnalyzedNftContract";
import { NftMetadataContract } from "../../../core/models/Nft/NftMetadataContract";
import "./NftMetadataViewer.scss";

interface NftMetadataViewerProps {
  nftMetadata: NftMetadataContract;
  analyzedData: AnalyzedNftContract | undefined;
}

export function NftMetadataViewer({ nftMetadata, analyzedData }: NftMetadataViewerProps) {
  return (
    <div
      className={`nft-metadata-viewer-container ${nftMetadata?.imageUrl ? "align-responsive" : ""}`}
    >
      {nftMetadata?.imageUrl && (
        <div className="nft-img-container">
          <img src={nftMetadata?.imageUrl} alt="NFT"></img>
        </div>
      )}
      <div>
        <div>
          <h3 className="nft-name">{nftMetadata?.name}</h3>
          <p>{nftMetadata?.description}</p>
        </div>
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
          <b>{analyzedData?.isDecentralized ? "Decentralized Server" : "Centralized Server"}</b>
        </p>
        {nftMetadata.hostingInformation?.organization && !analyzedData?.isDecentralized && (
          <div>
            <p>
              <b>IP Address: </b>
              {nftMetadata.hostingInformation?.ipAddress}
            </p>
            <p>
              <b>Hosting Provider: </b>
              {nftMetadata.hostingInformation?.organization}
            </p>
            <p>
              <b>Country: </b>
              {nftMetadata.hostingInformation?.country}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
