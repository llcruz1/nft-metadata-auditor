export interface NftTokenUriResponse {
  name: string;
  image: string;
  description: string;
  hostingInformation: HostingInformation;
}

export interface HostingInformation {
  ipAddress: string;
  organization: string;
  country: string;
}
