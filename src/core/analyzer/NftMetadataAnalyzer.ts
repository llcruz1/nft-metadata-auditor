import { DescentralizedStorageEnum } from "../enums/DescentralizedStorageEnum";
import { AnalyzedNftContract } from "../models/Analyzer/AnalyzedNftContract";

export class NftMetadataAnalyzer {
  public static checkIfUrlIsDecentralized(jsonMetadataUrl: URL, imageUrl: URL | null) {
    const descentralizedStorageUrls = Object.values(DescentralizedStorageEnum) as string[];

    const isDecentralized =
      descentralizedStorageUrls.includes(jsonMetadataUrl.hostname) ||
      jsonMetadataUrl.protocol === "ipfs:";

    const analyzedNftContract: AnalyzedNftContract = {
      isDecentralized: isDecentralized,
    };

    return analyzedNftContract;
  }
}
