import { Component, Input, OnInit } from "@angular/core";
import { IBaseArtist } from "src/app/interfaces/artist";

@Component({
  selector: "app-artist-list-item",
  templateUrl: "./artist-list-item.component.html",
  styleUrls: ["./artist-list-item.component.scss"],
})
export class ArtistListItemComponent implements OnInit {
  @Input() artist?: IBaseArtist;

  constructor() {}

  public ngOnInit(): void {}
}
