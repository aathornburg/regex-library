import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    NavigationBarComponent,
    NavigationLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
