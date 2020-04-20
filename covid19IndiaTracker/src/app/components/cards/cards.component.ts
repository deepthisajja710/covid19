import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  data:any=[];
  confirmed;
  active;
  recovered;
  deceased;
  updatedTime;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getCasesData();
  }
  getCasesData(){
    this.api.getCasesData().subscribe((res)=>{
      console.log("data",res);
      this.data=res;
      this.confirmed = this.data.statewise[0].confirmed;
      this.active = this.data.statewise[0].active;
      this.recovered = this.data.statewise[0].recovered;
      this.deceased = this.data.statewise[0].deaths;
      this.updatedTime = this.data.statewise[0].lastupdatedtime;
      console.log("time",this.updatedTime)
    })
  }
}
