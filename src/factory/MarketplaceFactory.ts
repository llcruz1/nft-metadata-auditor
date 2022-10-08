import { MarketplaceHostnameEnum } from "../enums/MarketplaceHostnameEnum";
import { OpenSea } from "../marketplaces/OpenSea";
import { IMarketplaceFactory } from "../models/Factory/IMarketplaceFactory";
import { IHttpServices } from "../models/HttpServices/IHttpServices";
import { IMarketplace } from "../models/Marketplace/IMarketplace";

export class MarketplaceFactory implements IMarketplaceFactory {
  httpServices: IHttpServices;

  constructor(httpServices: IHttpServices) {
    this.httpServices = httpServices;
  }

  create(nftUrl: URL): IMarketplace {
    switch (nftUrl.hostname) {
      case MarketplaceHostnameEnum.OpenSea:
        return new OpenSea(this.httpServices);
      default:
        throw Error("Marketplace not supported");
    }
  }
}
