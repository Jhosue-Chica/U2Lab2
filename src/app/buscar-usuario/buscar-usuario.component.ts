import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-usuario',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './buscar-usuario.component.html',
  styleUrl: './buscar-usuario.component.css'
})
export class BuscarUsuarioComponent implements OnInit {

  public cedulausuario!: string;
  public nombreusuario!: string;
  public correousuario!: string;
  public telefonousuario!: string;
  public direccionusuario!: string;
  public usuario: any;

  constructor(
    public UsuarioService: UsuarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['cedula']) {
        this.cedulausuario = params['cedula'];
        this.getUserByCedula();
      }
    });
  }

  async getUserByCedula() {
    try {
      this.usuario = await this.UsuarioService.getUserByCedula(this.cedulausuario);
      this.nombreusuario = this.usuario[0].nombreusuario;
      this.cedulausuario = this.usuario[0].cedulausuario;
      this.correousuario = this.usuario[0].correousuario  ;
      this.telefonousuario = this.usuario[0].telefonousuario;
      this.direccionusuario = this.usuario[0].direccionusuario;
    } catch (error) {
      console.log(error);
    }
  }


}
