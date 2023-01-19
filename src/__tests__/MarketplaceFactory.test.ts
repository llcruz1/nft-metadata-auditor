import { OpenSea } from "../core/marketplaces/OpenSea";
import { MarketplaceFactory } from "../core/factory/MarketplaceFactory";
import Web3ServiceWrapper from "../core/services/Web3/Web3ServiceWrapper";
import HttpServiceWrapper from "../core/services/Http/HttpServiceWrapper";
import { Rarible } from "../core/marketplaces/Rarible";

it("MarketplaceFactory should build OpenSea instance when using URL from opensea.", async () => {
  const url = new URL(
    "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/7670",
  );

  const marketplace = new MarketplaceFactory(Web3ServiceWrapper, HttpServiceWrapper, url).create();

  expect(marketplace).not.toBeNull();
  expect(marketplace).not.toBeUndefined();
  expect(marketplace).toBeInstanceOf(OpenSea);
});

it("MarketplaceFactory should build Rarible instance when using URL from Rarible.", async () => {
  const url = new URL("https://rarible.com/token/0x60e4d786628fea6478f785a6d7e704777c86a7c6:13888");

  const marketplace = new MarketplaceFactory(Web3ServiceWrapper, HttpServiceWrapper, url).create();

  expect(marketplace).not.toBeNull();
  expect(marketplace).not.toBeUndefined();
  expect(marketplace).toBeInstanceOf(Rarible);
});

it("MarketplaceFactory should throw Error when using an not implemented marketplace URL.", async () => {
  expect(() => {
    const url = new URL("https://localhost/");

    new MarketplaceFactory(Web3ServiceWrapper, HttpServiceWrapper, url).create();
  }).toThrow(Error);
});

export {};
