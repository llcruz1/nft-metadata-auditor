import { IDnsService, WhoisQueryResponse } from "../models/Dns";

const dns = require("dns");
const whois = require("whois-json");

class DnsService implements IDnsService {
  async dnsLookup(hostname: string): Promise<string> {
    return new Promise((resolve, reject) => {
      dns.lookup(hostname, (err: string, address: string) => {
        if (err) reject(err);
        resolve(address);
      });
    });
  }

  async whois(ipAddress: string): Promise<WhoisQueryResponse> {
    return await whois(ipAddress);
  }
}

export default new DnsService();
