import Web3ServiceWrapper from "../core/services/Web3/Web3ServiceWrapper";
import HttpServiceWrapper from "../core/services/Http/HttpServiceWrapper";
import { Rarible } from "../core/marketplaces/Rarible";
import { NftMetadataContract } from "../core/models/Nft/NftMetadataContract";

jest.mock("../core/services/Web3/Web3ServiceWrapper");
jest.mock("../core/services/Http/HttpServiceWrapper");

afterEach(() => jest.clearAllMocks());

it("Rarible should get metadata using Rarible marketplace's URL.", async () => {
  const url = new URL("https://rarible.com/token/0x60e4d786628fea6478f785a6d7e704777c86a7c6:13888");

  const mockedNftMetadataContract: NftMetadataContract = {
    address: "string",
    tokenId: "string",
    imageUrl: "string",
    jsonMetadataUrl: "string",
    name: "string",
    collectionSymbol: "string",
    description: "string",
    createdAt: "string",
    symbol: "string",
    hostingInformation: {
      ipAddress: "string",
      organization: "string",
      country: "string",
    },
  };

  Web3ServiceWrapper.nftMetadataService.getNftMetadata = jest
    .fn()
    .mockReturnValue(mockedNftMetadataContract);

  const marketplace = new Rarible(Web3ServiceWrapper, HttpServiceWrapper);

  const result = await marketplace.getMetadata(url);

  expect(result).not.toBeNull();
  expect(result).not.toBeUndefined();
  expect(result as NftMetadataContract).not.toBeNull();
  expect(Web3ServiceWrapper.nftMetadataService.getNftMetadata).toHaveBeenCalledTimes(1);
});

export {};
