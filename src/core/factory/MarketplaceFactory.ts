import { MarketplaceHostnameEnum } from "../enums/MarketplaceHostnameEnum";
import { OpenSea } from "../marketplaces/OpenSea";
import { Rarible } from "../marketplaces/Rarible";
import { IMarketplaceFactory } from "../models/Factory/IMarketplaceFactory";
import { IHttpServiceWrapper } from "../models/HttpServices/IHttpServiceWrapper";
import { IMarketplace } from "../models/Marketplace/IMarketplace";
import { IWeb3ServiceWrapper } from "../models/Web3Services/IWeb3ServiceWrapper";

export class MarketplaceFactory implements IMarketplaceFactory {
  private readonly httpServiceWrapper: IHttpServiceWrapper;
  private readonly nftUrl: URL;
  private readonly web3Services: IWeb3ServiceWrapper;

  constructor(web3Services: IWeb3ServiceWrapper, httpServices: IHttpServiceWrapper, nftUrl: URL) {
    this.web3Services = web3Services;
    this.httpServiceWrapper = httpServices;
    this.nftUrl = nftUrl;
  }

  create(): IMarketplace {
    switch (this.nftUrl.hostname) {
      case MarketplaceHostnameEnum.OpenSea:
        return new OpenSea(this.web3Services, this.httpServiceWrapper);
      case MarketplaceHostnameEnum.Rarible:
        return new Rarible(this.web3Services, this.httpServiceWrapper);
      default:
        throw Error("Marketplace not supported");
    }
  }
}
