import { IMarketplaceHttpService } from "./IMarketplaceHttpService";

export interface IHttpServiceWrapper {
  openSeaService: IMarketplaceHttpService;
  raribleService: IMarketplaceHttpService;
}
