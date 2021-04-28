import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  public jugadores = [
    {
      id: 1,
      nombre: 'Neku R',
      victorias: 123
    },
    {
      id: 2,
      nombre: 'NombreUsuario',
      victorias: 90
    },
    {
      id: 3,
      nombre: 'NewTestUser',
      victorias: 21
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
