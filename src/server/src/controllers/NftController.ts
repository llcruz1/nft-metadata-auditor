import axios from "axios";
import { Request, Response } from "express";
import { NftMetadataResponse, NftTokenUriInformation } from "../models/Nft";
import dnsService from "../services/dnsService";

class NftController {
  async getMetadata(request: Request, response: Response) {
    try {
      const tokenUri = request.query.tokenUri as string;

      const tokenUriResponse = await axios.get(tokenUri);

      const metadata: NftMetadataResponse = tokenUriResponse.data;

      const tokenIpAddress = await dnsService.dnsLookup(new URL(tokenUri).hostname);

      console.log("Token Ip Address:", tokenIpAddress);

      const whoisResult = await dnsService.whois(tokenIpAddress);

      console.log("Whois query result", whoisResult);

      const nftMetadataResponse: NftTokenUriInformation = {
        name: metadata.image,
        image: metadata.image,
        description: metadata.description,
        hostingInformation: {
          ipAddress: tokenIpAddress,
          organization: whoisResult.organization,
          country: whoisResult.country,
        },
      };

      return response.json(nftMetadataResponse);
    } catch (error) {
      console.log("Unexpected exception: ", error);
      return response.json();
    }
  }
}

export default new NftController();
