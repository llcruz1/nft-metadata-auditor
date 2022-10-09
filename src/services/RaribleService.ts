import axios from "axios";
import { IGenericHttpService } from "../models/HttpServices/IGenericHttpService";
import { IRaribleHttpService } from "../models/HttpServices/IRaribleHttpService";
import { RaribleMetadataResponse } from "../models/Rarible/RaribleMetadataResponse";

class RaribleService implements IRaribleHttpService, IGenericHttpService {
  public readonly service = axios.create({
    baseURL: "https://api.rarible.org",
  });

  public async getNftMetadata(
    contractAddress: string,
    tokenId: string
  ): Promise<RaribleMetadataResponse> {
    const response = await this.service.get(
      `v0.1/items/ETHEREUM:${contractAddress}:${tokenId}`
    );
    return response.data;
  }
}

export default new RaribleService();
