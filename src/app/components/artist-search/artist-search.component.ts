import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime, startWith, switchMap } from "rxjs/operators";
import { IBaseArtist } from "../../interfaces/artist";
import { ArtistsService } from "../../services/artists/artists.service";

@Component({
  selector: "app-artist-search",
  templateUrl: "./artist-search.component.html",
  styleUrls: ["./artist-search.component.scss"],
})
export class ArtistSearchComponent implements OnInit {
  @Output() artistSelected: EventEmitter<string> = new EventEmitter<string>();

  public searchControl = new FormControl();
  public filteredOptions$: Observable<IBaseArtist[]> = new Observable;

  constructor(private artistsService: ArtistsService) {}

  public ngOnInit() {
    this.listenForInputChanges();
  }

  public optionSelected(artist: string): void {
    this.artistSelected.emit(artist);
  }

  private listenForInputChanges(): void {
    this.filteredOptions$ = this.searchControl.valueChanges.pipe(
      debounceTime(400),
      startWith(""),
      switchMap((value) => this.artistsService.searchArtists(value))
    );
  }
}
