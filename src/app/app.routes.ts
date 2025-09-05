import { Routes } from '@angular/router';
import { Mensual } from './mensual/mensual';
import { Diario } from './diario/diario';
import { Mensaje } from './mensaje/mensaje';


export const routes: Routes = [
  { path: 'mensual', component: Mensual },
  { path: 'diario', component: Diario },
  { path: 'mensaje', component: Mensaje },
  { path: '', redirectTo: 'mensual', pathMatch: 'full' }
];
