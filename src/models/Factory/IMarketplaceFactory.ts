import { IMarketplace } from "../Marketplace/IMarketplace";

export interface IMarketplaceFactory {
  create(nftUrl: URL): IMarketplace;
}
