import { RouterModule, Routes } from '@angular/router';

import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [
    { path: 'home', component: SearchBoxComponent },
    { path: 'search', component: SearchBoxComponent },
    { path: 'browse', component: SearchBoxComponent }
  ];
  
export const routing = RouterModule.forRoot(routes);