import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

@Component({
   templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {
  messageError: string;
  user = {'username' : '', 'password': '' };

  constructor(public authService: AuthService, public router: Router) {
  }

  login() {
    let userReturn;
    const sub = this.authService.login(this.user).map(res => userReturn = res.json());
    sub.subscribe(
      response => {
        if (userReturn.id !== -1) {
          this.authService.loggedIn();
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

          const navigationExtras: NavigationExtras = {
              queryParamsHandling: 'preserve',
              preserveFragment: true
          };
          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        } else {
          this.messageError = 'Username or password is incorrect';
        }
      },
      error => {
        console.log(error.text());
      });
  }

  logout() {
    this.authService.logout();
  }
}
