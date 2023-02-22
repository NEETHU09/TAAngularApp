import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { constants } from '../../../config/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';
  errorOpen: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  onSubmit() {
    const data = {
      username: this.username,
      password: this.password,
    };
    console.log("data", data)
    this.authService
      .authenticateUser(data)
      .then((res: any) => {
        sessionStorage.setItem(constants.username, data.username);
        console.log("login: ", res)

        if (res?.message === constants.Authorized) {
          console.log('dashboard admin');
          this.router.navigate(['/dashboard-admin']);
        } else if (res?.message === constants.User) {
          console.log('dashboard');
          this.router.navigate(['/dashboard']);
        } else {
          console.log('login');
          this.errorOpen = true;
          this.router.navigate(['/']);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
       
  handleCloseError(event: any, reason: any): void {
    if (reason === 'clickaway') {
      return;
    }
    this.errorOpen = false;
  }
}

