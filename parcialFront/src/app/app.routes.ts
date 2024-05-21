import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { CelularListComponent } from './components/celular-list/celular-list.component';
import { CelularFormComponent } from './components/celular-form/celular-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/celulares', pathMatch: 'full' },
  { path: 'celulares', component: CelularListComponent },
  { path: 'celulares/add', component: CelularFormComponent },
  { path: 'celulares/edit/:id', component: CelularFormComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = provideRouter(routes);
