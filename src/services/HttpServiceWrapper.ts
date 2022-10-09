import { IHttpServiceWrapper } from "../models/HttpServices/IHttpServiceWrapper";
import OpenSeaService from "./OpenSeaService";
import RaribleService from "./RaribleService";

export class HttpServiceWrapper implements IHttpServiceWrapper {
  public openSeaService = OpenSeaService;
  public raribleService = RaribleService;
}
