import { IHttpServices } from "../models/HttpServices/IHttpServices";
import OpenSeaService from "./OpenSeaService";

export class HttpServices implements IHttpServices {
  public openSeaService = OpenSeaService;
}
