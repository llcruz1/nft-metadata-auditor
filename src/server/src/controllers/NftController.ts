import axios from "axios";
import { Request, Response } from "express";
import { NftTokenUriResponse } from "../models/Nft";
import dnsService from "../services/dnsService";

class NftController {
  async getMetadata(request: Request, response: Response) {
    try {
      const tokenUri = request.query.tokenUri as string;

      const tokenUriResponse = await axios.get(tokenUri);

      const metadata: NftTokenUriResponse = tokenUriResponse.data;

      const tokenIpAddress = await dnsService.dnsLookup(new URL(tokenUri).hostname);

      console.log("Token Ip Address:", tokenIpAddress);

      const whoisResult = await dnsService.whois(tokenIpAddress);

      console.log(
        "🚀 ~ file: NftController.ts ~ line 22 ~ NftController ~ getMetadata ~ whoisResult",
        whoisResult,
      );

      return response.json(metadata);
    } catch (error) {
      console.log("Unexpected exception: ", error);
    }
  }
}

export default new NftController();
