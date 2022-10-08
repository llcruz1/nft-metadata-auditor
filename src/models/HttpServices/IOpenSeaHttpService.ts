import { OpenSeaMetadataResponse } from "../OpenSea/OpenSeaMetadataResponse";

export interface IOpenSeaHttpService {
  getNftMetadata(
    contractAddress: string,
    tokenId: string
  ): Promise<OpenSeaMetadataResponse>;
}
