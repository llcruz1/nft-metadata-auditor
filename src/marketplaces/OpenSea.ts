import { IHttpServices } from "../models/HttpServices/IHttpServices";
import { IMarketplace } from "../models/Marketplace/IMarketplace";
import { NftMetadataContract } from "../models/Nft/NftMetadataContract";

type OpenSeaNftPathname = `asset/ethereum/${string}/${string}}`

export class OpenSea implements IMarketplace {
  httpServices: IHttpServices;

  constructor(httpServices: IHttpServices) {
    this.httpServices = httpServices;
  }

  async getMetadata(nftUrl: URL): Promise<NftMetadataContract | undefined> {
    try {
      const pathname = nftUrl.pathname as OpenSeaNftPathname;
      const routeParams = pathname.split("/");
      const contractAddress = routeParams[3];
      const tokenId = routeParams[4];

      const response = await this.httpServices.openSeaService.getNftMetadata(
        contractAddress,
        tokenId
      );

      return {
        address: response.asset_contract.address,
        tokenId: response.token_id,
        imageUrl: response.image_url,
        name: response.name,
        collectionSymbol: response.asset_contract.symbol,
        description: response.description,
        createdAt: response.asset_contract.created_date,
      } as NftMetadataContract;
    } catch (error) {
      console.log(error);
    }
  }
}
