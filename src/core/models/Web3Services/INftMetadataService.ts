import { TokenStandardEnum } from "../../enums/TokenStandardEnum";
import { NftMetadataContract } from "../Nft/NftMetadataContract";

export interface INftMetadataService {
  getNftMetadata(
    contractAddress: string,
    tokenId: string,
    tokenStandard?: TokenStandardEnum,
  ): Promise<NftMetadataContract>;
}
