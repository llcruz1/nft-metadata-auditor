import { ethers } from "ethers";
import { JsonRpcSigner } from "@ethersproject/providers";
import erc721Abi from "../abi/erc721Abi.json";
import erc1155Abi from "../abi/erc1155Abi.json";
import { IHttpServiceWrapper } from "../models/HttpServices/IHttpServiceWrapper";
import { NftMetadataContract } from "../models/Nft/NftMetadataContract";
import { HttpServiceWrapper } from "./HttpServiceWrapper";
import { TokenStandardEnum } from "../enums/TokenStandardEnum";

class Web3Service {
  private readonly httpServiceWrapper: IHttpServiceWrapper;

  private signer!: JsonRpcSigner;

  constructor(httpServices: IHttpServiceWrapper) {
    this.httpServiceWrapper = httpServices;
  }

  public async getNftMetadata(
    contractAddress: string,
    tokenId: string,
    tokenStandard: TokenStandardEnum,
  ): Promise<any> {
    await this.connectToMetamask();

    if (tokenStandard === TokenStandardEnum.ERC721) {
      return await this.getErc721Metadata(contractAddress, tokenId);
    }

    return this.getErc1155Metadata(contractAddress, tokenId);
  }

  private async getErc721Metadata(contractAddress: string, tokenId: string) {
    const nftContract = new ethers.Contract(contractAddress, erc721Abi, this.signer);

    const name = (await nftContract.name()) as string;
    const symbol = (await nftContract.symbol()) as string;
    const tokenUri = (await nftContract.tokenURI(tokenId)) as string;

    const tokenUriData = await this.httpServiceWrapper.tokenUriService.getMetadataFromTokenUri(
      tokenUri,
    );

    const nftMetadata: NftMetadataContract = {
      address: contractAddress,
      tokenId: tokenId,
      jsonMetadataUrl: tokenUri,
      imageUrl: tokenUriData.image,
      name: name,
      symbol: symbol,
      description: tokenUriData.description,
    };

    return nftMetadata;
  }

  private async getErc1155Metadata(contractAddress: string, tokenId: string) {
    const nftContract = new ethers.Contract(contractAddress, erc1155Abi, this.signer);

    const multiTokenUri = (await nftContract.uri(tokenId)) as string;
    const tokenUri = multiTokenUri.replace("0x{id}", tokenId);

    const tokenUriData = await this.httpServiceWrapper.tokenUriService.getMetadataFromTokenUri(
      tokenUri,
    );

    const nftMetadata: NftMetadataContract = {
      address: contractAddress,
      tokenId: tokenId,
      jsonMetadataUrl: tokenUri,
      imageUrl: tokenUriData.image,
      name: "",
      symbol: "",
      description: tokenUriData.description,
    };

    return nftMetadata;
  }

  private async connectToMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    this.signer = provider.getSigner();
  }
}

export default new Web3Service(new HttpServiceWrapper());
