import { IImageUrl } from "./artist";

export interface ITopAlbumsPerArtistResponse {
  topalbums: ITopAlbumsResponse;
}

export interface ITopAlbumsResponse {
  album: ITopAlbum[];
}

export interface ITopAlbum {
  name: string;
  playcount: string;
  image: IImageUrl[];
}
