import { ethers } from "ethers";
import erc721Abi from "../abi/erc721Abi.json";
import { IHttpServiceWrapper } from "../models/HttpServices/IHttpServiceWrapper";
import { NftMetadataContract } from "../models/Nft/NftMetadataContract";
import { HttpServiceWrapper } from "./HttpServiceWrapper";

class Web3Service {
  private readonly httpServiceWrapper: IHttpServiceWrapper;

  constructor(httpServices: IHttpServiceWrapper) {
    this.httpServiceWrapper = httpServices;
  }

  public async getNftMetadata(contractAddress: string, tokenId: string): Promise<any> {
    const signer = await this.connectToMetamask();
    const nftContract = new ethers.Contract(contractAddress, erc721Abi, signer);

    const name = (await nftContract.name()) as string;
    const symbol = (await nftContract.symbol()) as string;
    const tokenUri = (await nftContract.tokenURI(tokenId)) as string;

    const tokenUriData = await this.httpServiceWrapper.tokenUriService.getMetadataFromTokenUri(
      tokenUri,
    );

    const nftMetadata: NftMetadataContract = {
      address: contractAddress,
      tokenId: tokenId,
      imageUrl: tokenUriData.image,
      name: name,
      symbol: symbol,
      description: tokenUriData.description,
    };

    return nftMetadata;
  }

  private async connectToMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    return signer;
  }
}

export default new Web3Service(new HttpServiceWrapper());
