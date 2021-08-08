import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar-compare",
  templateUrl: "./navbar-compare.component.html",
  styleUrls: ["./navbar-compare.component.scss"],
})
export class NavbarCompareComponent implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit(): void {}

  public navigateToCompare(): void {
    this.router.navigate(["artists/compare"]);
  }
}
