import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import {
  IBaseArtist,
  ISearchArtistsResponse,
  ITopArtist,
  ITopArtistsResponse,
} from 'src/app/interfaces/artist';
import {
  IArtistDetails,
  IArtistInfoResponse,
} from 'src/app/interfaces/artistInfo';
import {
  ITopAlbum,
  ITopAlbumsPerArtistResponse,
} from 'src/app/interfaces/artistTopAlbums';
import {
  ITopTrack,
  ITopTracksPerArtistResponse,
} from 'src/app/interfaces/artistTopTracks';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  public searchArtists(searchTerm: string): Observable<IBaseArtist[]> {
    if (!searchTerm || searchTerm.trim() === '') {
      return of([]);
    }

    return this.http
      .get<ISearchArtistsResponse>(
        `${
          environment.lastFmUrl
        }?method=artist.search&artist=${searchTerm.trim()}&format=json&limit=20&api_key=${
          environment.lastFmApiKey
        }`
      )
      .pipe(
        map((response) => {
          let artists: IBaseArtist[] = [];

          if (
            response &&
            response.results &&
            response.results.artistmatches &&
            response.results.artistmatches.artist
          ) {
            artists = response.results.artistmatches.artist;
          }

          return artists;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public getTopArtistsByCountry(country: string): Observable<ITopArtist[]> {
    return this.http
      .get<ITopArtistsResponse>(
        `${
          environment.lastFmUrl
        }?method=geo.gettopartists&country=${country.trim()}&api_key=${
          environment.lastFmApiKey
        }&format=json&limit=10`
      )
      .pipe(
        map((response: ITopArtistsResponse) => {
          let artists: ITopArtist[] = [];

          if (response && response.topartists && response.topartists.artist) {
            artists = response.topartists.artist;
          }

          return artists;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public getArtistInfo(artistName: string): Observable<IArtistDetails> {
    return this.http
      .get<IArtistInfoResponse>(
        `${environment.lastFmUrl}?method=artist.getInfo&api_key=${
          environment.lastFmApiKey
        }&format=json&artist=${artistName.trim()}`
      )
      .pipe(
        map((response) => {
          return response && response.artist;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public getArtistTopTracks(artistName: string): Observable<ITopTrack[]> {
    return this.http
      .get<ITopTracksPerArtistResponse>(
        `${
          environment.lastFmUrl
        }/?method=artist.gettoptracks&artist=${artistName.trim()}&api_key=${
          environment.lastFmApiKey
        }&format=json&limit=5`
      )
      .pipe(
        map((response) => {
          let tracks: ITopTrack[] = [];

          if (response && response.toptracks && response.toptracks.track) {
            tracks = response.toptracks.track;
          }

          return tracks;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public getArtistTopAlbums(artistName: string): Observable<ITopAlbum[]> {
    return this.http
      .get<ITopAlbumsPerArtistResponse>(
        `${
          environment.lastFmUrl
        }/?method=artist.gettopalbums&artist=${artistName.trim()}&api_key=${
          environment.lastFmApiKey
        }&format=json&limit=5`
      )
      .pipe(
        map((response) => {
          let tracks: ITopAlbum[] = [];

          if (response && response.topalbums && response.topalbums.album) {
            tracks = response.topalbums.album;
          }

          return tracks;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }
}
