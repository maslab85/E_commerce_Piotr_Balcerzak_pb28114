import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getOrders();
  }
  public barChartOptions: ChartOptions = {
    responsive: true,

    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {datalabels: {
      anchor: 'end',align: 'end',}}};

    public barChartLabels: Label[] = ['2020-04-17', '2020-04-17', '2020-04-18', '2020-04-19', '2020-04-20', '2020-04-21', '2020-04-21','2020-04-21','2020-04-25','2020-04-25',
    '2020-04-29','2020-05-05','2020-05-06','2020-05-14','2020-05-16','2020-05-16','2020-05-17','2020-05-19','2020-05-21','2020-05-21','2020-05-22','2020-05-23','2020-05-23','2020-05-23'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [pluginDataLabels];
    public barChartData: ChartDataSets[] = [
        { data: [123, 123, 123, 911, 213, 199, 586,225,437,26,
          335,13,199,223,20,2080,143,76,169,185.14,69,212,347,400.14], label: 'PLN' }];
    // events //
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {console.log(event, active);}
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {console.log(event, active);}
    public randomize(): void {// Only Change 3 valuesconst data = [Math.round(Math.random() * 100),59,80,(Math.random() * 100),56,(Math.random() * 100),40];this.barChartData[0].data = data;}
}
}
