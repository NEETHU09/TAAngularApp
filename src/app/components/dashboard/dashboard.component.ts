import { Component } from '@angular/core';
import { constants } from '../../../config/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username: string;

  constructor() {
    const retrievedUsername = sessionStorage.getItem(constants.username);
    if (retrievedUsername) {
      const sentenceCase = retrievedUsername.charAt(0).toUpperCase() + retrievedUsername.slice(1).toLowerCase();
      this.username = sentenceCase;
    } else {
      this.username = '';
    }
  }
}


