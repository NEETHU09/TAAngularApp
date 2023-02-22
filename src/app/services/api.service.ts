import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private metricsUrl: string;
  private sourceFilesUrl: string;

  private config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private configService: ConfigService) {
    this.metricsUrl = this.configService.getInvoiceMetricsUrl();
    this.sourceFilesUrl = this.configService.getSourceFilesUrl();
  }

  // Get invoice processing metrics
  async getMetrics(): Promise<any> {
    try {
      const resp = await axios.get(this.metricsUrl, this.config);
      if (resp) {
        const response = resp.data;
        // console.log('resp', response)
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Get all source files
  async getSourceFiles(): Promise<any> {
    try {
      const resp = await axios.get(this.sourceFilesUrl, this.config);
      if (resp) {
        const response = resp.data;
        // console.log('resp', response)
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
