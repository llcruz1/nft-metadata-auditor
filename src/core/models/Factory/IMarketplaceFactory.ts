import { IMarketplace } from "../Marketplace/IMarketplace";

export interface IMarketplaceFactory {
  create(): IMarketplace;
}
