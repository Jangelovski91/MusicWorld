import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-artist-compare",
  templateUrl: "./artist-compare.component.html",
  styleUrls: ["./artist-compare.component.scss"],
})
export class ArtistCompareComponent implements OnInit {
  public firstArtist?: string;
  public secondArtist?: string;

  constructor() {}

  public ngOnInit(): void {}

  public firstArtistSelected(artist: string): void {
    if (artist) {
      this.firstArtist = artist;
    }
  }

  public secondArtistSelected(artist: string): void {
    if (artist) {
      this.secondArtist = artist;
    }
  }
}
