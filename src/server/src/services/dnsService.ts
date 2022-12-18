import { IDnsService } from "../models/Dns";

const dns = require("dns");

class DnsService implements IDnsService {
  async dnsLookup(hostname: string): Promise<string> {
    return new Promise((resolve, reject) => {
      dns.lookup(hostname, (err: string, address: string) => {
        if (err) reject(err);
        resolve(address);
      });
    });
  }
}

export default new DnsService();
