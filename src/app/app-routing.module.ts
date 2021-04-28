import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndiceComponent } from './indice/indice.component';
import { MensajeriaComponent } from './mensajeria/mensajeria.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RankingComponent } from './ranking/ranking.component';
import { TiendaComponent } from './tienda/tienda.component';
import { TorneosDetailsComponent } from './torneos/torneos-details/torneos-details.component';
import { TorneosComponent } from './torneos/torneos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'indice', component: IndiceComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'torneos/:id',component:TorneosDetailsComponent},
  {path:'torneos',component: TorneosComponent},
  {path:'ranking',component: RankingComponent},
  {path:'mensajeria',component:MensajeriaComponent},
  {path:'tienda', component: TiendaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
