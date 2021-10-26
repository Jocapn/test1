import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData: IUser = {
    firstName: '',
    lastName: '',
    isMember: false
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(usr => {
      this.userData = { ...usr };
    });
  }

  save(): void {
    this.authService.user$.next(this.userData);
  }

}
