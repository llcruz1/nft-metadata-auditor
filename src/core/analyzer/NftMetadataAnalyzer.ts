import { DescentralizedStorageEnum } from "../enums/DescentralizedStorageEnum";
import { AnalyzedNftContract } from "../models/Analyzer/AnalyzedNftContract";

export class NftMetadataAnalyzer {
  public static getHostingInformationFromUrl(imageUrl: URL, jsonMetadataUrl: URL) {
    /// todo: whois imageUrl
    /// todo: We will need to find out if both the imageUrl and jsonMetadataUrl are hosted in decentralized servers
    ///       and return some kind of 'score' of decentralization to the user.

    const descentralizedStorageUrls = Object.values(DescentralizedStorageEnum) as string[];

    const analyzedNftContract: AnalyzedNftContract = {
      isDecentralized: descentralizedStorageUrls.includes(jsonMetadataUrl.hostname),
      hostingProvider: "",
    };

    return analyzedNftContract;
  }
}
