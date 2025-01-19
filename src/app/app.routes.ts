import { Routes } from '@angular/router';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';

export const routes: Routes = [
  {path: 'buscarUsuario', component: BuscarUsuarioComponent, pathMatch: 'full'},
];
