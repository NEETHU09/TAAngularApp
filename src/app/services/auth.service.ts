import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import axios from 'axios';
import { constants } from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationUrl: string;

  constructor(private configService: ConfigService) {
    this.authenticationUrl = this.configService.getLoginUrl();
  }

  async authenticateUser(user: any): Promise<any> {
    try {
      const resp = await axios.post(this.authenticationUrl, user);
      const response = resp.data;
      console.log("from service", response)

      if (response) {
        if (response?.message === constants.Authorized) {
          // sessionStorage.setItem(constants.token, response.data);
          return response;
        } else if (response?.message === constants.User) {
          return response;
        } else if (response?.message === constants.Unauthorized) {
          return 'Unauthorized';
        }
      }
    } catch (error) {
      console.log(error);
      return 'Login Failed';
    }
  }
}

