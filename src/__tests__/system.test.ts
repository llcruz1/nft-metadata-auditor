import TokenUriService from "../core/services/Http/TokenUriService";
import { ITokenUriService } from "../core/models/HttpServices/ITokenUriService";

import {OpenSea} from "../core/marketplaces/OpenSea";
import {MarketplaceFactory} from "../core/factory/MarketplaceFactory";
import Web3ServiceWrapper from "../core/services/Web3/Web3ServiceWrapper";
import HttpServiceWrapper from "../core/services/Http/HttpServiceWrapper";
import { initializeProvider } from '@metamask/providers';

// import axios from "axios";

// jest.mock("axios");

it("Expect", async () => {
    const url = new URL("https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/7670");

    // const marketplace = new MarketplaceFactory();
    const marketplace = new MarketplaceFactory(
        Web3ServiceWrapper,
        HttpServiceWrapper,
        url,
      ).create();
      const metadata = await marketplace.getMetadata(url);
    // const mockedAxios = axios as jest.Mocked<typeof axios>;

    // mockedAxios.get.mockResolvedValueOnce({});

    // var result = await TokenUriService.getMetadataFromTokenUri(fakeTokenURI);
    console.log(metadata);
    expect(metadata).not.toBeNull();
});

export {};