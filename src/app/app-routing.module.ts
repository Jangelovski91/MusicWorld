import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtistCompareComponent } from "./components/artist-compare/artist-compare.component";
import { ArtistDetailsComponent } from "./components/artist-details/artist-details.component";
import { ArtistListComponent } from "./components/artist-list/artist-list.component";

const routes: Routes = [
  { path: "artists", component: ArtistListComponent },
  { path: "artists/compare", component: ArtistCompareComponent },
  { path: "artists/:id", component: ArtistDetailsComponent },
  { path: "", redirectTo: "/artists", pathMatch: "full" },
  { path: "**", redirectTo: "/artists" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
