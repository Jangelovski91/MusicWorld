import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBaseArtist } from 'src/app/interfaces/artist';
import { ArtistsService } from 'src/app/services/artists/artists.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  public artists$: Observable<IBaseArtist[]> = new Observable();
  public listOfCountries = [
    {
      name: 'Germany',
      value: 'germany',
    },
    {
      name: 'France',
      value: 'france',
    },
    {
      name: 'Latvia',
      value: 'latvia',
    },
  ];

  constructor(private artistService: ArtistsService) {}

  public ngOnInit(): void {
    this.artists$ = this.artistService.getTopArtistsByCountry(
      this.listOfCountries[0].value
    );
  }

  public getArtistsByCountry(country: string): void {
    this.artists$ = this.artistService.getTopArtistsByCountry(country);
  }
}
