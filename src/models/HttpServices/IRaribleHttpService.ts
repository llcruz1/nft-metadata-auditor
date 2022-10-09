import { RaribleMetadataResponse } from "../Rarible/RaribleMetadataResponse";

export interface IRaribleHttpService {
  getNftMetadata(
    contractAddress: string,
    tokenId: string
  ): Promise<RaribleMetadataResponse>;
}
