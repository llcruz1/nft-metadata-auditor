import { TupleType } from "typescript";
import { IHttpServiceWrapper } from "../models/HttpServices/IHttpServiceWrapper";
import { IMarketplace } from "../models/Marketplace/IMarketplace";
import { NftMetadataContract } from "../models/Nft/NftMetadataContract";
import { OpenSeaMetadataResponse } from "../models/OpenSea/OpenSeaMetadataResponse";

type OpenSeaNftPathname = `asset/ethereum/${string}/${string}}`;

export class OpenSea implements IMarketplace {
  private readonly httpServiceWrapper: IHttpServiceWrapper;

  constructor(httpServices: IHttpServiceWrapper) {
    this.httpServiceWrapper = httpServices;
  }

  public async getMetadata(nftUrl: URL): Promise<NftMetadataContract | undefined> {
    const [contractAddress, tokenId] = this.getContractAddressAndTokenIdFromUrl(nftUrl);
    try {
      const response: OpenSeaMetadataResponse =
        await this.httpServiceWrapper.openSeaService.getNftMetadata(contractAddress, tokenId);

      const nftMetadata: NftMetadataContract = {
        address: response.asset_contract.address,
        tokenId: response.token_id,
        imageUrl: response.image_original_url,
        name: response.name,
        collectionSymbol: response.asset_contract.symbol,
        description: response.description,
        createdAt: response.asset_contract.created_date,
      };

      return nftMetadata;
    } catch (error) {
      throw new Error("Could not communicate with OpenSea Api.");
    }
  }

  private getContractAddressAndTokenIdFromUrl(nftUrl: URL): [string, string] {
    try {
      const pathname = nftUrl.pathname as OpenSeaNftPathname;
      const routeParams = pathname.split("/");
      const contractAddress = routeParams[3];
      const tokenId = routeParams[4];
      return [contractAddress, tokenId];
    } catch (error) {
      throw new Error("Error when trying to parse URL");
    }
  }
}
