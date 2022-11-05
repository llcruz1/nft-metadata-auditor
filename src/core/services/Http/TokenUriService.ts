import axios from "axios";
import { ITokenUriService } from "../../models/HttpServices/ITokenUriService";
import { NftTokenUriResponse } from "../../models/Nft/NftTokenUriResponse";

class TokenUriService implements ITokenUriService {
  public async getMetadataFromTokenUri(tokenUri: string): Promise<NftTokenUriResponse> {
    const response = await axios.get(`${tokenUri}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }
}

export default new TokenUriService();
