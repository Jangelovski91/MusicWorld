import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar-search-bar",
  templateUrl: "./navbar-search-bar.component.html",
  styleUrls: ["./navbar-search-bar.component.scss"],
})
export class NavbarSearchBarComponent implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit(): void {}

  public artistSelected(artist: string): void {
    if (artist) {
      this.router.navigate([`artists/${artist}`]);
    }
  }
}
