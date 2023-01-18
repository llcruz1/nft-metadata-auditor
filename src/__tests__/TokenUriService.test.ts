import TokenUriService from "../core/services/Http/TokenUriService";
import { ITokenUriService } from "../core/models/HttpServices/ITokenUriService";
import { NftTokenUriResponse } from "../core/models/Nft/NftTokenUriResponse";
import axios from "axios";

jest.mock("axios");

it("Expect", async () => {
    const fakeTokenURI = "URI";
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    mockedAxios.get.mockResolvedValueOnce({ data: {
        name: "CloneX #19586",
        image: "https://clonex-assets.rtfkt.com/images/1724.png",
        description: "CLONE X 20,000 next-gen Avatars, by RTFKT and Takashi Murakami...",
        hostingInformation: {
            ipAddress: "172.64.144.73",
            organization:"rtfkt.com",
            country:""
        }
    }});

    var result = await TokenUriService.getMetadataFromTokenUri(fakeTokenURI);
    
    expect(result).not.toBeNull();
    expect(result as NftTokenUriResponse).not.toBeNull();
    expect(mockedAxios.get).toBeCalledTimes(1);
});

export {};