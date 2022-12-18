export interface IDnsService {
  dnsLookup(hostname: string): Promise<string>;
}
