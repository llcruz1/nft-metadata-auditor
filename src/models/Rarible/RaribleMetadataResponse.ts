// blockchain:token:tokenId
type ItemId = `${string}:${string}:${string}`;

// blockchain:nativeICollectionId
type CollectionId = `${string}:${string}`;

export interface RaribleMetadataResponse {
  id: ItemId;
  blockchain: string;
  creators: Creators;
  lastUpdateAt: string;
  mintedAt: string;
  collection?: CollectionId;
  contract?: string;
  tokenId?: string;
  meta?: Metadata;
}

interface Creators {
  account: string;
  value: number;
}

interface Metadata {
  name: string;
  description: string;
  content: Content[];
  originalMetaUri: string;
}

interface Content {
  url: string;
  mimeType: string;
  size: number;
  width: number;
  height: number;
  available: boolean;
}
