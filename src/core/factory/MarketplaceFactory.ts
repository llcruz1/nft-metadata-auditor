import { MarketplaceHostnameEnum } from "../enums/MarketplaceHostnameEnum";
import { OpenSea } from "../marketplaces/OpenSea";
import { Rarible } from "../marketplaces/Rarible";
import { IMarketplaceFactory } from "../models/Factory/IMarketplaceFactory";
import { IHttpServiceWrapper } from "../models/HttpServices/IHttpServiceWrapper";
import { IMarketplace } from "../models/Marketplace/IMarketplace";

export class MarketplaceFactory implements IMarketplaceFactory {
  private readonly httpServiceWrapper: IHttpServiceWrapper;
  private readonly nftUrl: URL;

  constructor(httpServices: IHttpServiceWrapper, nftUrl: URL) {
    this.httpServiceWrapper = httpServices;
    this.nftUrl = nftUrl;
  }

  create(): IMarketplace {
    switch (this.nftUrl.hostname) {
      case MarketplaceHostnameEnum.OpenSea:
        return new OpenSea(this.httpServiceWrapper);
      case MarketplaceHostnameEnum.Rarible:
        return new Rarible(this.httpServiceWrapper);
      default:
        throw Error("Marketplace not supported");
    }
  }
}
