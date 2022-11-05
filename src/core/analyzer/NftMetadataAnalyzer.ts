import { DescentralizedStorageEnum } from "../enums/DescentralizedStorageEnum";
import { AnalyzedNftContract } from "../models/Analyzer/AnalyzedNftContract";

export class NftMetadataAnalyzer {
  public static getHostingInformationFromUrl(imageUrl: URL, jsonMetadataUrl: URL) {
    /// todo: whois imageUrl

    const descentralizedStorageUrls = Object.values(DescentralizedStorageEnum) as string[];

    const analyzedNftContract: AnalyzedNftContract = {
      isDescentralized: descentralizedStorageUrls.includes(imageUrl.hostname),
      hostingProvider: "",
    };

    return analyzedNftContract;
  }
}
