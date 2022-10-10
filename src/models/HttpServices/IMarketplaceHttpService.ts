import { AxiosInstance } from "axios";

export interface IMarketplaceHttpService {
  readonly service: AxiosInstance;
  getNftMetadata<T>(contractAddress: string, tokenId: string): Promise<T>;
}
