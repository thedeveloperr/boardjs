import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page';
import { NoContentPageComponent } from './pages/no-content-page';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    { path: '', component: HomePageComponent },
    { path: '**', component: NoContentPageComponent },
];
