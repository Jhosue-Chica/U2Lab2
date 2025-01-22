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

  saveUser(data: any) {
    console.log('Guardando usuario:', data);
    return new Promise((resolve) => {
      this.http.post(this.url + 'insertarUsuario', data)
        .subscribe({
          next: (data) => {
            console.log('Usuario guardado:', data);
            resolve(data);
          },
          error: (error) => {
            console.log('Error al guardar el usuario:', error);
          }
        });
    });
  }

  getAllUsers() {
    console.log('Iniciando la búsqueda de todos los usuarios');
    return new Promise((resolve) => {
      this.http.get(this.url + 'leerUsuarios/')
        .subscribe({
          next: (data) => {
            console.log('Datos recibidos:', data);
            resolve(data);
          },
          error: (error) => {
            console.log('Error al buscar los usuarios:', error);
          }
        });
    });
  }

  updateUser(cedula: string, data: any) {
    console.log('Actualizando usuario con cédula:', cedula);
    return new Promise((resolve) => {
      this.http.put(this.url + 'actualizarUsuario/' + cedula, data)
        .subscribe({
          next: (data) => {
            console.log('Usuario actualizado:', data);
            resolve(data);
          },
          error: (error) => {
            console.log('Error al actualizar el usuario:', error);
          }
        });
    });
  }
}
