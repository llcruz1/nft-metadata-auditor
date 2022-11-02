import { IMarketplaceHttpService } from "./IMarketplaceHttpService";
import { ITokenUriService } from "./ITokenUriService";

export interface IHttpServiceWrapper {
  openSeaService: IMarketplaceHttpService;
  raribleService: IMarketplaceHttpService;
  tokenUriService: ITokenUriService;
}
