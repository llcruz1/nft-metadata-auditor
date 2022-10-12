import axios from "axios";
import { IMarketplaceHttpService } from "../models/HttpServices/IMarketplaceHttpService";

class RaribleService implements IMarketplaceHttpService {
  public readonly service = axios.create({
    baseURL: "https://api.rarible.org",
  });

  public async getNftMetadata<RaribleMetadataResponse>(
    contractAddress: string,
    tokenId: string,
  ): Promise<RaribleMetadataResponse> {
    const response = await this.service.get(`v0.1/items/ETHEREUM:${contractAddress}:${tokenId}`);
    return response.data;
  }
}

export default new RaribleService();
