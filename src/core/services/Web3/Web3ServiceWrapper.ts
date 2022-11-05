import { IWeb3ServiceWrapper } from "../../models/Web3Services/IWeb3ServiceWrapper";
import NftMetadataService from "./NftMetadataService";

export class Web3ServiceWrapper implements IWeb3ServiceWrapper {
  public nftMetadataService = NftMetadataService;
}

export default new Web3ServiceWrapper();
