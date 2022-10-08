import axios from "axios";
import { IGenericHttpService } from "../models/HttpServices/IGenericHttpService";
import { IOpenSeaHttpService } from "../models/HttpServices/IOpenSeaHttpService";
import { OpenSeaMetadataResponse } from "../models/OpenSea/OpenSeaMetadataResponse";

class OpenSeaService implements IOpenSeaHttpService, IGenericHttpService {
  public readonly service = axios.create({
    baseURL: "https://api.opensea.io",
  });

  public async getNftMetadata(
    contractAddress: string,
    tokenId: string
  ): Promise<OpenSeaMetadataResponse> {
    const response = await this.service.get(
      `asset/${contractAddress}/${tokenId}`
    );
    return response.data;
  }
}

export default new OpenSeaService();
