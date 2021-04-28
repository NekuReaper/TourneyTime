import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeriaComponent } from './mensajeria.component';
import { NuevoMensajeComponent } from './nuevo-mensaje/nuevo-mensaje.component';
import { DialogModule, Dialog } from "primeng/dialog";


@NgModule({
  declarations: [
    MensajeriaComponent,
    NuevoMensajeComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports:[
    MensajeriaComponent,
    NuevoMensajeComponent
  ]
})
export class MensajeriaModule { }
