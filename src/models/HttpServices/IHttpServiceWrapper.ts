import { IOpenSeaHttpService } from "./IOpenSeaHttpService";
import { IRaribleHttpService } from "./IRaribleHttpService";

export interface IHttpServiceWrapper {
  openSeaService: IOpenSeaHttpService;
  raribleService: IRaribleHttpService;
}
