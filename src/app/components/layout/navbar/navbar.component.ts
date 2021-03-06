import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public appTitle = "MusicWorld";

  constructor(private router: Router) {}

  public ngOnInit(): void {}

  public redirectToHome(): void {
    this.router.navigate(["/"]);
  }
}
