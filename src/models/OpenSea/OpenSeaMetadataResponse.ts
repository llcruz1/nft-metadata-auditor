export interface OpenSeaMetadataResponse {
  token_id: string;
  image_original_url: string;
  name: string;
  external_link: string;
  last_sale: string;
  description: string;
  asset_contract: AssetContract;
}

interface AssetContract {
  address: string;
  created_date: string;
  symbol: string;
  description: string;
  image_url: string;
  owner: number;
}
