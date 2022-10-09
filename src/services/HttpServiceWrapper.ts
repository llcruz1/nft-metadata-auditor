import { IHttpServiceWrapper } from "../models/HttpServices/IHttpServiceWrapper";
import OpenSeaService from "./OpenSeaService";

export class HttpServiceWrapper implements IHttpServiceWrapper {
  public openSeaService = OpenSeaService;
}
