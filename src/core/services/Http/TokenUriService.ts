import axios from "axios";
import { ITokenUriService } from "../../models/HttpServices/ITokenUriService";
import { NftTokenUriResponse } from "../../models/Nft/NftTokenUriResponse";

class TokenUriService implements ITokenUriService {
  public async getMetadataFromTokenUri(tokenUri: string): Promise<NftTokenUriResponse> {
    const response = await axios.get(
      `${process.env.REACT_APP_NFT_METADATA_AUDITOR_SERVER}/nft/metadata?tokenUri=${tokenUri}`,
    );
    return response.data;
  }
}

export default new TokenUriService();
