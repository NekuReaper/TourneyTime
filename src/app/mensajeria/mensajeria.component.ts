import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css'],
  providers: [DatePipe]
})
export class MensajeriaComponent implements OnInit {
  display: boolean = false;
  public filtroUsuario: any;
  public filtroFecha: Date = new Date();
  public mensajes = [
    {
      id: 1,
      nombre: 'Neku_R',
      asunto: '¿Eres nuevo aquí?',
      fecha: new Date(2021,4,28,5)
    },
    {
      id: 2,
      nombre: 'NombreUsuario',
      asunto: 'Yo sólo soy un placeholder. :v',
      fecha: new Date(2021,4,13,2)
    },
    {
      id: 3,
      nombre: 'NewTestUser',
      asunto: 'Bienvenido a Tourney Time',
      fecha: new Date(2021,4,13,1)
    }
  ]
  constructor(private datePipe:DatePipe) { }

  ngOnInit(): void {
  }
  showDialog(){
    this.display = true;
  }
}
