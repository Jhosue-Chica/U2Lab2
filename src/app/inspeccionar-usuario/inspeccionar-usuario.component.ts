import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inspeccionar-usuario',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './inspeccionar-usuario.component.html',
  styleUrl: './inspeccionar-usuario.component.css'
})
export class InspeccionarUsuarioComponent {
  usuario: any;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    const cedula = this.route.snapshot.params['cedula'];
    this.cargarUsuario(cedula);
  }

  async cargarUsuario(cedula: string) {
    this.usuario = await this.usuarioService.getUserByCedula(cedula);
  }

}
