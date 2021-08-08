import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IArtistDetails } from 'src/app/interfaces/artistInfo';
import { ITopAlbum } from 'src/app/interfaces/artistTopAlbums';
import { ITopTrack } from 'src/app/interfaces/artistTopTracks';
import { ArtistsService } from 'src/app/services/artists/artists.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss'],
})
export class ArtistDetailsComponent implements OnInit, OnDestroy, OnChanges {
  private routeParamsSubscription?: Subscription;
  private artistInfoSubscription?: Subscription;
  private topTracksSubscription?: Subscription;
  private topAlbumsSubscription?: Subscription;

  public artistInfoLoaded = false;
  public topTracksLoaded = false;
  public topAlbumsLoaded = false;

  public artistInfo?: IArtistDetails;
  public artistTopTracks: ITopTrack[] = [];
  public artistTopAlbums: ITopAlbum[] = [];

  @Input() artistId?: string;

  constructor(
    private artistsService: ArtistsService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    if (!this.artistId) {
      this.routeParamsSubscription = this.route.params.subscribe((params) => {
        if (params && params.id) {
          const artistId: string = params.id;

          this.getArtistInfo(artistId);
          this.getArtistTopTracks(artistId);
          this.getArtistTopAlbums(artistId);
        }
      });
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['artistId'] && changes['artistId'].currentValue) {
      const artistId: string = changes['artistId'].currentValue;

      this.getArtistInfo(artistId);
      this.getArtistTopTracks(artistId);
      this.getArtistTopAlbums(artistId);
    }
  }

  public ngOnDestroy(): void {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }

    if (this.artistInfoSubscription) {
      this.artistInfoSubscription.unsubscribe();
    }

    if (this.topTracksSubscription) {
      this.topTracksSubscription.unsubscribe();
    }

    if (this.topAlbumsSubscription) {
      this.topAlbumsSubscription.unsubscribe();
    }
  }

  private getArtistInfo(name: string): void {
    this.artistInfoLoaded = false;

    this.artistInfoSubscription = this.artistsService
      .getArtistInfo(name)
      .subscribe(
        (response) => {
          this.artistInfo = response;
          this.artistInfoLoaded = true;
        },
        (error) => {
          this.artistInfoLoaded = true;
        }
      );
  }

  private getArtistTopTracks(name: string): void {
    this.topTracksLoaded = false;

    this.topTracksSubscription = this.artistsService
      .getArtistTopTracks(name)
      .subscribe(
        (response) => {
          this.artistTopTracks = response;
          this.topTracksLoaded = true;
        },
        (error) => {
          this.topTracksLoaded = true;
        }
      );
  }

  private getArtistTopAlbums(name: string): void {
    this.topAlbumsLoaded = false;

    this.topAlbumsSubscription = this.artistsService
      .getArtistTopAlbums(name)
      .subscribe(
        (response) => {
          this.artistTopAlbums = response;
          this.topAlbumsLoaded = true;
        },
        (error) => {
          this.topAlbumsLoaded = true;
        }
      );
  }
}
