import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-insertar-usuario',
  imports: [FormsModule, RouterModule],
  templateUrl: './insertar-usuario.component.html',
  styleUrl: './insertar-usuario.component.css'
})
export class InsertarUsuarioComponent {
  public cedulausuario!: string;
  public nombreusuario!: string;
  public correousuario!: string;
  public telefonousuario!: string;
  public direccionusuario!: string;

  constructor(public UsuarioService: UsuarioService) { }

  async saveNewUsuario() {
    try {
      let newUsuario = this.builAndGetNewUsuarioObject();
      await this.UsuarioService .saveUser(newUsuario);
      console.log('Usuario guardado con exito');
    } catch (error) {
      console.log('Ocurrio un error' + error);
    }
  }

  builAndGetNewUsuarioObject() {
    let newUsuario = {
      nombreusuario: this.nombreusuario,
      cedulausuario: this.cedulausuario,
      telefonousuario: this.telefonousuario,
      direccionusuario: this.direccionusuario,
      correousuario: this.correousuario,
    }
    return newUsuario;
  }
}
