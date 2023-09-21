import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string = '';
  contrasenia: number =0;
  constructor(private router:Router) {}
  guardar(){
    this.router.navigateByUrl("login/" + this.usuario);

  }
}

