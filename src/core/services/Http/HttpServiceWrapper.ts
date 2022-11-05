import { IHttpServiceWrapper } from "../../models/HttpServices/IHttpServiceWrapper";
import TokenUriService from "./TokenUriService";

export class HttpServiceWrapper implements IHttpServiceWrapper {
  public tokenUriService = TokenUriService;
}

export default new HttpServiceWrapper();
