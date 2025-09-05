import { Routes } from '@angular/router';
import { Mensual } from './mensual/mensual';
import { Diario } from './diario/diario';
import { Mensaje } from './mensaje/mensaje';
import { Mensaje2 } from './mensaje2/mensaje2';


export const routes: Routes = [
  { path: 'mensual', component: Mensual },
  { path: 'diario', component: Diario },
  { path: 'mensaje', component: Mensaje },
  { path: 'mensaje2', component: Mensaje2 },
  { path: '', redirectTo: 'mensual', pathMatch: 'full' }
];
