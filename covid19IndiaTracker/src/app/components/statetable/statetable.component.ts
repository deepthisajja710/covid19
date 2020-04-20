import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-statetable',
  templateUrl: './statetable.component.html',
  styleUrls: ['./statetable.component.scss']
})
export class StatetableComponent implements OnInit {
  data: any =[];
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getCasesData();
  }
  dataOfStates =  [];
  cols = [
    { field: 'state', header: 'State/UT' },
    { field: 'confirmed', header: 'Confirmed' },
    { field: 'active', header: 'Active' },
    { field: 'recovered', header: 'Recovered' },
    { field: 'deaths', header: 'Deceased' },
  ];

  getCasesData(){
    this.api.getCasesData().subscribe((res)=>{
      console.log("data",res);
      this.data = res;
      this.dataOfStates = this.data.statewise.slice(1);
      console.log("states data",this.dataOfStates)
    })
  }

}
