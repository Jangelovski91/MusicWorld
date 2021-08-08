import { IBaseArtist } from "./artist";

export interface IArtistInfoResponse {
  artist: IArtistDetails;
}

export interface IArtistDetails extends IBaseArtist {
  stats: IArtistStats;
}

export interface IArtistStats {
  listeners: string;
  playcount: string;
}
