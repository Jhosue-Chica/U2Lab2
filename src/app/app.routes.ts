import { Routes } from '@angular/router';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { InsertarUsuarioComponent } from './insertar-usuario/insertar-usuario.component';
import { LeerUsuariosComponent } from './leer-usuarios/leer-usuarios.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';

export const routes: Routes = [
  {path: 'buscarUsuario', component: BuscarUsuarioComponent, pathMatch: 'full'},
  {path: 'insertarUsuario', component: InsertarUsuarioComponent, pathMatch: 'full'},
  {path: 'leerUsuarios', component: LeerUsuariosComponent, pathMatch: 'full'},
  { path: 'actualizarUsuario/:cedula', component: ActualizarUsuarioComponent },

];
