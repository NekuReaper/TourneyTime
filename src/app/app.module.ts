import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from "primeng/button";
import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng/card';
import { IndiceComponent } from './indice/indice.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TopbarComponent } from './core/topbar/topbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { TorneosComponent } from './torneos/torneos.component';
import { TorneosDetailsComponent } from './torneos/torneos-details/torneos-details.component';
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { RankingComponent } from './ranking/ranking.component';
import { TableModule } from "primeng/table";
import { MensajeriaComponent } from './mensajeria/mensajeria.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { TiendaComponent } from './tienda/tienda.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndiceComponent,
    PerfilComponent,
    TopbarComponent,
    FooterComponent,
    TorneosComponent,
    TorneosDetailsComponent,
    RankingComponent,
    MensajeriaComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    InputTextModule,
    CheckboxModule,
    CalendarModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    AppComponent
  ]
})
export class AppModule { }
