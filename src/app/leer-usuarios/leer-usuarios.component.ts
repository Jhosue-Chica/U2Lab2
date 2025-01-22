import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leer-usuarios',
  imports: [CommonModule, RouterModule],
  templateUrl: './leer-usuarios.component.html',
  styleUrl: './leer-usuarios.component.css'
})
export class LeerUsuariosComponent {
  usuarios: any = [];

  constructor(public UsuarioService: UsuarioService) {
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

}
