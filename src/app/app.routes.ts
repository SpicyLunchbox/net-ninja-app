import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: 'directory', component: DirectoryComponent },
  { path: '', component: HomeComponent },
];
