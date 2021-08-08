export interface IBaseArtist {
  name: string;
  image: IImageUrl[];
  url: string;
}

export interface IImageUrl {
  "#text": string;
  size: string;
}

export interface ISearchArtistsResponse {
  results: IArtistMatchesResponse;
}

export interface IArtistMatchesResponse {
  artistmatches: IArtistResponse;
}

export interface IArtistResponse {
  artist: IBaseArtist[];
}

export interface ITopArtistsResponse {
  topartists: ITopArtistsResponse;
}

export interface ITopArtistsResponse {
  artist: ITopArtist[];
}

export interface ITopArtist extends IBaseArtist {
  listeners: string;
}






