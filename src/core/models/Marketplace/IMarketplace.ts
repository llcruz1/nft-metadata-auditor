import { NftMetadataContract } from "../Nft/NftMetadataContract";

export interface IMarketplace {
  getMetadata(nftUrl: URL): Promise<NftMetadataContract>;
}
