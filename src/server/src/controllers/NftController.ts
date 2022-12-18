import axios from "axios";
import { Request, Response } from "express";
import { NftTokenUriResponse } from "../models/Nft";
import dnsService from "../services/dnsService";

const whois = require("whois-json");

class NftController {
  async getMetadata(request: Request, response: Response) {
    try {
      const tokenUri = request.query.tokenUri as string;

      const tokenUriResponse = await axios.get(tokenUri);

      const metadata: NftTokenUriResponse = tokenUriResponse.data;

      const tokenIpAddress = await dnsService.dnsLookup(new URL(tokenUri).hostname);

      const whoisResult = await whois(tokenIpAddress);

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
