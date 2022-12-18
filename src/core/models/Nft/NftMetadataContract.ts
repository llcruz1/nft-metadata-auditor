import { HostingInformation } from "./NftTokenUriResponse";

export interface NftMetadataContract {
  address: string;
  tokenId: string;
  imageUrl: string;
  jsonMetadataUrl: string;
  name: string;
  collectionSymbol?: string;
  description: string;
  createdAt?: string;
  symbol?: string;
  hostingInformation: HostingInformation;
}
