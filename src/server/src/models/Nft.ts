export interface NftMetadataResponse {
  name: string;
  image: string;
  description: string;
}

export interface NftTokenUriInformation {
  name: string;
  image: string;
  description: string;
  hostingInformation: HostingInformation;
}

interface HostingInformation {
  ipAddress: string;
  organization: string;
  country: string;
}
