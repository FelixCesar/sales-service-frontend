import { Routes } from '@angular/router';
import { Mensual } from './mensual/mensual';
import { Diario } from './diario/diario';


export const routes: Routes = [
  { path: 'mensual', component: Mensual },
  { path: 'diario', component: Diario },
  { path: '', redirectTo: 'mensual', pathMatch: 'full' }
];
