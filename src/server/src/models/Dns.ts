export interface IDnsService {
  dnsLookup(hostname: string): Promise<string>;
  whois(ipAddress: string): Promise<WhoisQueryResponse>;
}

export interface WhoisQueryResponse {
  availableAt: string;
  netRange: string;
  cidr: string;
  netName: string;
  netHandle: string;
  parent: string;
  netType: string;
  organization: string;
  regDate: string;
  updated: string;
  comment: string;
  ref: string;
  orgName: string;
  orgId: string;
  address: string;
  city: string;
  stateProv: string;
  postalCode: string;
  country: string;
  orgAbuseHandle: string;
  orgAbuseName: string;
  orgAbusePhone: string;
  orgAbuseEmail: string;
  orgAbuseRef: string;
  orgTechHandle: string;
  orgTechName: string;
  orgTechPhone: string;
  orgTechEmail: string;
  orgTechRef: string;
}
