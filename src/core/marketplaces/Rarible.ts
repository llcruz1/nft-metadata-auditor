import { IHttpServiceWrapper } from "../models/HttpServices/IHttpServiceWrapper";
import { IMarketplace } from "../models/Marketplace/IMarketplace";
import { NftMetadataContract } from "../models/Nft/NftMetadataContract";
import { IWeb3ServiceWrapper } from "../models/Web3Services/IWeb3ServiceWrapper";

// token/${contractAddress}:${tokenId}}
type RaribleNftPathname = `token/${string}:${string}}`;

export class Rarible implements IMarketplace {
  private readonly httpServiceWrapper: IHttpServiceWrapper;
  private readonly web3ServiceWrapper: IWeb3ServiceWrapper;

  constructor(web3Services: IWeb3ServiceWrapper, httpServices: IHttpServiceWrapper) {
    this.web3ServiceWrapper = web3Services;
    this.httpServiceWrapper = httpServices;
  }

  public async getMetadata(nftUrl: URL): Promise<NftMetadataContract> {
    const [contractAddress, tokenId] = this.getContractAddressAndTokenIdFromUrl(nftUrl);
    try {
      const nftMetadata = await this.web3ServiceWrapper.nftMetadataService.getNftMetadata(
        contractAddress,
        tokenId,
      );
      return nftMetadata;
    } catch (error) {
      console.log(error);
      throw new Error(`Unexpected error when trying to interact with smart contract. `);
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
