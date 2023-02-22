import { Injectable } from '@angular/core';
import config from '../../config/config.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private url = config.localhostUrl;

  getLoginUrl(): string {
    return this.url + '/login';
  }

  getInvoiceMetricsUrl(): string {
    return this.url + '/metrics';
  }

  getSourceFilesUrl(): string {
    return this.url + '/sourcefiles';
  }
}
