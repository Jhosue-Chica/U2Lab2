import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-usuario',
  imports: [FormsModule, CommonModule],
  templateUrl: './eliminar-usuario.component.html',
  styleUrl: './eliminar-usuario.component.css'
})
export class EliminarUsuarioComponent {
  usuario: any;
  cedula: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.cedula = this.route.snapshot.params['cedula'];
    this.cargarUsuario();
  }

  async cargarUsuario() {
    this.usuario = await this.usuarioService.getUserByCedula(this.cedula);
  }

  async confirmarEliminacion() {
    await this.usuarioService.deleteUser(this.cedula);
    this.router.navigate(['/leerUsuarios']);
  }

  cancelar() {
    this.router.navigate(['/leerUsuarios']);
  }

}
