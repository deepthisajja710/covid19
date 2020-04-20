import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  chart;
  data:any=[];
  confirmed;
  active;
  recovered;
  deceased;
  updatedTime;
  activeCount;
  recoveredCount;
  deceasedCount;
  constructor(private api:ApiService) { 
    this.getCasesData();
  }
  dataForPieChart =  {
    datasets : [{
      data :[this.confirmed, this.active, this.recovered,this.deceased],
      backgroundColor : ['red','yellow','blue','grey'],
      borderWidth :0
    }],
    labels: [
      'Red',
      'Yellow',
      'Blue',
      'grey'
    ] 
  }

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
      this.activeCount = "Active("+((this.active/this.confirmed)*100).toFixed(1)+"%)";
      this.recoveredCount = "Recovered("+((this.recovered/this.confirmed)*100).toFixed(1)+"%)";
      this.deceasedCount = "Deceased("+((this.deceased/this.confirmed)*100).toFixed(1)+"%)";
      this.getPieChartData();
    })
  }
 

    /*********** Generating the Pie Chart  ***************/
    getPieChartData(){
      this.chart = new Chart('doughnut',{
      type : 'doughnut',
      data:{   datasets : [{
        data :[ this.active, this.recovered,this.deceased],
        backgroundColor : ['#00cccc','#88ff4d','grey'],
        borderWidth :0
      }],
      labels: [
        this.activeCount,
        this.recoveredCount,
        this.deceasedCount
      ]} ,
      options : {
        legend : {
          display : true,
          fontSize:10,
          fontColor:'#00000',
          position : 'right',
          onClick : function(event) {},          
        },
        responsive : true,
        }
      })
    }
  }
