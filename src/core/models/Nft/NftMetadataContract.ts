export interface NftMetadataContract {
  address: string;
  tokenId: string;
  imageUrl: string;
  name: string;
  collectionSymbol?: string;
  description: string;
  createdAt: string;
}