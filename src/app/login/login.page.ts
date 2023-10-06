import { Component, OnInit, ElementRef, ViewChildren, ViewChild} from '@angular/core';
import type { QueryList } from '@angular/core';

import type { Animation } from '@ionic/angular';
import { AlertController, AnimationController, IonInput } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MatInput } from '@angular/material/input';

import { BusquedaApiService } from '../busqueda-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  segmentModel = "Experiencia Laboral";

  datosRegiones: any[] = [];
  idRegion: number = 1;
  nombreRegion: string = '';

  @ViewChildren(IonInput, { read: ElementRef }) inputs!: QueryList<ElementRef>;
  @ViewChild('fechaNacimiento', { read: MatInput }) fechaNacimiento!: MatInput;

  private animacionInputs!: Animation;
  private input1!: Animation;
  private input2!: Animation;

  constructor(
      private alertController: AlertController,
      private animationCtrl: AnimationController,
      private activatedRoute: ActivatedRoute,
      private busquedaApiService:BusquedaApiService
      ) { }

      usuario:string ='';
      nombre: string = '';
      apellido: string = '';
      nivelEducacional: string = '';

      public alertButtons = ['OK'];

      async mostrar() {
        const alert = await this.alertController.create({
          header: `${this.activatedRoute.snapshot.params["username"]}`,
          subHeader: `Su nombre es ${this.nombre} ${this.apellido}`,
          buttons: ['Aceptar']
        });

        await alert.present();
      }

      ngOnInit() {
        this.mostrarUsuario();
        this.busquedaApiService.getDatos().subscribe((response) => {
          // Asegúrate de que la estructura de la respuesta sea correcta
          if (response.success && Array.isArray(response.data)) {
            this.datosRegiones = response.data;
            // Realiza una búsqueda inicial solo después de cargar los datos
            this.buscar();
          } else {
            this.nombreRegion = 'Datos de región no disponibles';
          }
        });

      }
      limpiar(){
        this.nombre = '';
        this.apellido = '';
        this.nivelEducacional = '';
        this.fechaNacimiento.value = '';
      }
      mostrarUsuario(){
        this.usuario = this.activatedRoute.snapshot.params["username"];


      }

      ngAfterViewInit() {
        this.animacionInputs = this.animationCtrl
        .create()
        .duration(1000)
        .iterations(1)
        .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
        .fromTo('opacity', '1', '0.2');

      }

      ejecutarAnimacion() {
        let transformInicial : string;
        let opacidadInicial : string;

        this.animacionInputs.stop();
        this.inputs.forEach((element: ElementRef) => {
          transformInicial = element.nativeElement.style.transform;
          opacidadInicial = element.nativeElement.style.opacity;
          element.nativeElement.style.transform = 'translateX(0px)';
          element.nativeElement.style.opacity = '1';
          this.animacionInputs.addElement(element.nativeElement);
        });

        this.animacionInputs.play();

        this.animacionInputs.onFinish(() => {
          this.inputs.forEach((element: ElementRef) => {
            element.nativeElement.style.transform = transformInicial;
            element.nativeElement.style.opacity = opacidadInicial;
          });

          this.animacionInputs.stop();
        });
      }

      segmentChanged(event: any){
        console.log(this.segmentModel);
        console.log(event);
      }
      buscar() {
        // Busca el nombre de la región correspondiente al ID deseado
        const regionEncontrada = this.datosRegiones.find(region => region.id === this.idRegion);

        if (regionEncontrada) {
          this.nombreRegion = regionEncontrada.nombre;
        } else {
          this.nombreRegion = 'Región no encontrada';
        }
      }
}
