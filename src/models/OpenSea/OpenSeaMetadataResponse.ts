export interface OpenSeaMetadataResponse {
  image_url: string;
  name: string;
  description: string;
  asset_contract: AssetContract;
  token_id: string;
}

interface AssetContract {
  address: string;
  created_date: string;
  symbol: string;
  description: string;
  image_url: string;
  owner: number;
}
