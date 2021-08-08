import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./components/layout/navbar/navbar.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { NavbarSearchBarComponent } from "./components/layout/navbar/navbar-search-bar/navbar-search-bar.component";
import { NavbarCompareComponent } from "./components/layout/navbar/navbar-compare/navbar-compare.component";
import { ArtistListComponent } from "./components/artist-list/artist-list.component";
import { ArtistListItemComponent } from "./components/artist-list/artist-list-item/artist-list-item.component";
import { ArtistDetailsComponent } from "./components/artist-details/artist-details.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./modules/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ArtistSearchComponent } from './components/artist-search/artist-search.component';
import { ArtistCompareComponent } from './components/artist-compare/artist-compare.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavbarSearchBarComponent,
    NavbarCompareComponent,
    ArtistListComponent,
    ArtistListItemComponent,
    ArtistDetailsComponent,
    ArtistSearchComponent,
    ArtistCompareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
