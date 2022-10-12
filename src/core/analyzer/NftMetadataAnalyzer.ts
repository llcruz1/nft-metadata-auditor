import { AnalyzedNftContract } from "../models/Analyzer/AnalyzedNftContract";

export class NftMetadataAnalyzer {
  public static getHostingInformationFromUrl(imageUrl: URL) {
    /// todo: whois imageUrl

    const analyzedNftContract: AnalyzedNftContract = {
      isDescentralized: imageUrl.hostname === "ipfs.io",
      hostingProvider: "",
    };

    return analyzedNftContract;
  }
}
