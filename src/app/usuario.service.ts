import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/';
  constructor(public http: HttpClient, public https: HttpClient) { }

  getUserByCedula(cedula: string) {
    console.log('Iniciando la búsqueda del usuario con cédula:', cedula);
    return new Promise((resolve) => {
      this.http.get(this.url + 'buscarUsuarioCedula/' + cedula)
      .subscribe({
        next: (data) => {
          console.log('Datos recibidos:', data);
          resolve(data);
        },
        error: (error) => {
          console.log('Error al buscar el usuario:', error);
        }
      });
    });
  }
}
