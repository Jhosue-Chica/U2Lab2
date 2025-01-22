import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { RouterModule , Router} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leer-usuarios',
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './leer-usuarios.component.html',
  styleUrl: './leer-usuarios.component.css'
})
export class LeerUsuariosComponent {
  usuarios: any = [];
  searchCedula: string = '';

  constructor(public UsuarioService: UsuarioService, private router: Router) {
    this.getAllUsuarios();
  }

  async getAllUsuarios() {
    try {
      this.usuarios = await this.UsuarioService.getAllUsers();
      console.log('Usuarios obtenidos con exito');
    } catch (error) {
      console.log('Ocurrio un error' + error);
    }
  }

  async buscarUsuario() {
    if (this.searchCedula) {
      this.router.navigate(['/buscarUsuario'], {
        queryParams: { cedula: this.searchCedula }
      });
    }
  }

  navegarAInsertarUsuario() {
    this.router.navigate(['/insertarUsuario']);
  }

}
