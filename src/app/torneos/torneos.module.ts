import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TorneosComponent } from './torneos.component';
import { TorneosDetailsComponent } from './torneos-details/torneos-details.component';
import { ActivatedRoute, Router } from '@angular/router';



@NgModule({
  declarations: [
    TorneosComponent,
    TorneosDetailsComponent
  ],
  imports: [
    CommonModule,
    Router,
    ActivatedRoute
  ],
  exports:[
    TorneosComponent,
    TorneosDetailsComponent
  ]
})
export class TorneosModule { 
  constructor(){}
}
