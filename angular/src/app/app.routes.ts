import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { PageComponent } from './pages/form/form';
import { IndexComponent } from './pages/index/index';
import { AuthGuard } from '../guard';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'page', component: PageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];