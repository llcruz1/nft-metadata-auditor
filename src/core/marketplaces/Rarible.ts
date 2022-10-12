import { IHttpServiceWrapper } from "../models/HttpServices/IHttpServiceWrapper";
import { IMarketplace } from "../models/Marketplace/IMarketplace";
import { NftMetadataContract } from "../models/Nft/NftMetadataContract";
import { RaribleMetadataResponse } from "../models/Rarible/RaribleMetadataResponse";

// token/${contractAddress}:${tokenId}}
type RaribleNftPathname = `token/${string}:${string}}`;

export class Rarible implements IMarketplace {
  private readonly httpServiceWrapper: IHttpServiceWrapper;

  constructor(httpServices: IHttpServiceWrapper) {
    this.httpServiceWrapper = httpServices;
  }

  public async getMetadata(nftUrl: URL): Promise<NftMetadataContract | undefined> {
    const [contractAddress, tokenId] = this.getContractAddressAndTokenIdFromUrl(nftUrl);
    try {
      const response: RaribleMetadataResponse =
        await this.httpServiceWrapper.raribleService.getNftMetadata(contractAddress, tokenId);

      const nftMetadata: NftMetadataContract = {
        address: response.contract?.split(":")[1] ?? "",
        tokenId: response.tokenId ?? "",
        imageUrl: response.meta?.content[0] ? response.meta?.content[0].url : "",
        name: response.meta?.name ?? "",
        description: response.meta?.description ?? "",
        createdAt: response.mintedAt,
      };

      return nftMetadata;
    } catch (error) {
      throw new Error("Could not communicate with Rarible Api.");
    }
  }

  private getContractAddressAndTokenIdFromUrl(nftUrl: URL): [string, string] {
    try {
      const pathname = nftUrl.pathname as RaribleNftPathname;
      const routeParams = pathname.split("/");
      const tokenParams = routeParams[2].split(":");
      const contractAddress = tokenParams[0];
      const tokenId = tokenParams[1];
      return [contractAddress, tokenId];
    } catch (error) {
      throw new Error("Error when trying to parse URL");
    }
  }
}
