import TokenUriService from "../core/services/Http/TokenUriService";
import { ITokenUriService } from "../core/models/HttpServices/ITokenUriService";
// import axios from "axios";

// jest.mock("axios");

it("Expect", () => {
    const fakeTokenURI = "URI";
    // const mockedAxios = axios as jest.Mocked<typeof axios>;

    // mockedAxios.get.mockResolvedValueOnce({});

    var result = TokenUriService.getMetadataFromTokenUri(fakeTokenURI);
    console.log(result);
    expect(result).not.toBeNull();
});

export {};