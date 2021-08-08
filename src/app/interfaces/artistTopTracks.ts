import { IImageUrl } from "./artist";

export interface ITopTracksPerArtistResponse {
  toptracks: ITopTracksResponse;
}

export interface ITopTracksResponse {
  track: ITopTrack[];
}

export interface ITopTrack {
  name: string;
  playcount: string;
  image: IImageUrl[];
}
