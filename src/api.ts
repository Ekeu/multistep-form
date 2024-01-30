export const SEARCH_API_ENDPOINT =
  'https://api-adresse.data.gouv.fr/search?q={{query}}&type=housenumber';

export interface IFeature {
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: {
    label: string;
    score: number;
    housenumber: string;
    id: string;
    name: string;
    postcode: string;
    citycode: string;
    oldcitycode: string;
    x: number;
    y: number;
    city: string;
    oldcity: string;
    context: string;
    type: string;
    importance: number;
    street: string;
  };
}

export interface ISearchResult {
  type: string;
  version: string;
  features: IFeature[];
  attribution: string;
  licence: string;
  query: string;
  filters: {
    type: string;
  };
  limit: number;
}
