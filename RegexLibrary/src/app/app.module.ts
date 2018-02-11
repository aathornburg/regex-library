import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    NavigationBarComponent,
    NavigationLinkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
