import axios from "axios";
import { IMarketplaceHttpService } from "../models/HttpServices/IMarketplaceHttpService";

class OpenSeaService implements IMarketplaceHttpService {
  public readonly service = axios.create({
    baseURL: "https://api.opensea.io",
  });

  public async getNftMetadata<OpenSeaMetadataResponse>(
    contractAddress: string,
    tokenId: string,
  ): Promise<OpenSeaMetadataResponse> {
    const response = await this.service.get(`asset/${contractAddress}/${tokenId}`);
    return response.data;
  }
}

export default new OpenSeaService();
