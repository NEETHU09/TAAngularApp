import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-invoice-metrics',
  templateUrl: './invoice-metrics.component.html',
  styleUrls: ['./invoice-metrics.component.css']
})
export class InvoiceMetricsComponent {
  metricsData: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMetricsData();
  }

  async getMetricsData(): Promise<void> {
    await this.apiService.getMetrics().then((res) => {
      console.log("Res", res)
      this.metricsData = 
      [
        {
          icon: 'done_all',
          title: res[0].title,
          value: res[0].totalCount,
          color: '#799A3D',
        },
        {
          icon: 'receipt',
          title: res[1].title,
          value: res[1].invoiceCount,
          color: '#E88686',
        },
        {
          icon: 'person',
          title: res[2].title,
          value: res[2].usersCount,
          color: '#E3C64E',
        },
        {
          icon: 'timelapse',
          title: res[3].title,
          value: res[3].timeCount,
          color: '#808080',
        },
      ];
    });
  }
}
