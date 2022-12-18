import axios from "axios";
import { Request, Response } from "express";
import { NftTokenUriResponse } from "../models/Nft";

class NftController {
  async getMetadata(request: Request, response: Response) {
    try {
      const { tokenUri } = request.query;

      const { data } = await axios.get(tokenUri as string);

      return response.json(data as NftTokenUriResponse);
    } catch (error) {
      console.log("Unexpected exception: ", error);
    }
  }
}

export default new NftController();
