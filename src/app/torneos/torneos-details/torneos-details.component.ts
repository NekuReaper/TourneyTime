import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-torneos-details',
  templateUrl: './torneos-details.component.html',
  styleUrls: ['./torneos-details.component.css']
})
export class TorneosDetailsComponent implements OnInit {
  public id;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("ID de torneo pasado: " + this.id);
  }
}
