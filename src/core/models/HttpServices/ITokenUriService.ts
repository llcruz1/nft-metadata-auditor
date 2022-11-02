import { NftTokenUriResponse } from "../Nft/NftTokenUriResponse";

export interface ITokenUriService {
  getMetadataFromTokenUri(tokenUri: string): Promise<NftTokenUriResponse>;
}
