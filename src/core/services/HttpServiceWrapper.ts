import { IHttpServiceWrapper } from "../models/HttpServices/IHttpServiceWrapper";
import OpenSeaService from "./OpenSeaService";
import RaribleService from "./RaribleService";
import TokenUriService from "./TokenUriService";

export class HttpServiceWrapper implements IHttpServiceWrapper {
  public openSeaService = OpenSeaService;
  public raribleService = RaribleService;
  public tokenUriService = TokenUriService;
}
