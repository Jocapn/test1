import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  user: IUser = {
    firstName: '',
    lastName: '',
    isMember: false
  };

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  login(): void {
    this.authService.login(
      {
        firstName: 'Stojan',
        lastName: 'Savic',
        isMember: false
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }

  setMemberToTrue(): void{
    this.authService.setMemberToTrue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      isMember: false
    });
  }
}
