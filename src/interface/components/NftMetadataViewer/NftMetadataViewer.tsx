import React from "react";
import { AnalyzedNftContract } from "../../../core/models/Analyzer/AnalyzedNftContract";
import { NftMetadataContract } from "../../../core/models/Nft/NftMetadataContract";
import StatusBadge from "../StatusBadge/StatusBadge";
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
        {analyzedData?.isDecentralized ? (
          <p>
            <div className="badge">
              <StatusBadge status="success">Decentralized Server</StatusBadge>
            </div>
            <br />
            <span>This NFT is hosted by a decentralized server</span>
          </p>
        ) : (
          <p>
            <div className="badge">
              <StatusBadge status="error">Centralized Server</StatusBadge>
            </div>
            <br />
            <span>
              Ownership of this NFT cannot be guaranteed after purchase due to its contents being
              hosted by a centralized server
            </span>
          </p>
        )}
        <br />
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
