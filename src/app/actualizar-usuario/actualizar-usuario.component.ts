import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './actualizar-usuario.component.html',
  styleUrl: './actualizar-usuario.component.css'
})
export class ActualizarUsuarioComponent implements OnInit {
  public cedulaOriginal!: string; // Nueva variable para guardar la cédula original
  public cedulausuario!: string;
  public nombreusuario!: string;
  public correousuario!: string;
  public telefonousuario!: string;
  public direccionusuario!: string;
  public usuario: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public UsuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const cedula = params['cedula'];
      if (cedula) {
        this.cedulaOriginal = cedula; // Guardamos la cédula original
        this.cedulausuario = cedula;
        this.cargarDatosUsuario(cedula);
      }
    });
  }

  async cargarDatosUsuario(cedula: string) {
    try {
      this.usuario = await this.UsuarioService.getUserByCedula(cedula);
      this.nombreusuario = this.usuario[0].nombreusuario;
      this.cedulausuario = this.usuario[0].cedulausuario;
      this.correousuario = this.usuario[0].correousuario;
      this.telefonousuario = this.usuario[0].telefonousuario;
      this.direccionusuario = this.usuario[0].direccionusuario;
    } catch (error) {
      console.log(error);
    }
  }

  async updateUsuario() {
    try {
      const updatedUser = this.buildAndGetUpdatedUsuarioObject();
      // Usamos la cédula original para la actualización
      await this.UsuarioService.updateUser(this.cedulaOriginal, updatedUser);
      console.log('Usuario actualizado con éxito');
      this.router.navigate(['/leerUsuarios']);
    } catch (error) {
      console.log('Ocurrió un error al actualizar:', error);
    }
  }

  buildAndGetUpdatedUsuarioObject() {
    return {
      nombreusuario: this.nombreusuario,
      cedulausuario: this.cedulausuario, // Esta puede ser la nueva cédula
      telefonousuario: this.telefonousuario,
      direccionusuario: this.direccionusuario,
      correousuario: this.correousuario,
    };
  }
}
