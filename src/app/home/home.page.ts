import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string = '';
  contrasenia: string = '';
  maxUsernameLength: number = 8;
  maxPasswordLength: number = 4;

  constructor(private router:Router,private ServiceService: ServiceService) {}
  async login() {
    const loginSuccessful = await this.ServiceService.login(this.usuario, this.contrasenia);

    if (loginSuccessful) {
      localStorage.setItem('tempUsername', this.usuario);
    this.router.navigateByUrl("login/" + this.usuario);
    }
  }

  getUsernameErrorMessage() {
    return this.usuario.length > this.maxUsernameLength ? 'Nombre de usuario demasiado largo' : '';
  }

  getPasswordErrorMessage() {
    if (this.contrasenia.length > this.maxPasswordLength) {
      return 'Contraseña demasiado larga';
    } else if (this.contrasenia.length > 0 && !/^[0-9]*$/.test(this.contrasenia)) {
      return 'La contraseña debe ser numérica';
    }
    return '';
  }

  // Api() {
  //   this.router.navigate(['/busqueda-api']);
  // }


}

