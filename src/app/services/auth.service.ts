import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IUser {
    firstName: string;
    lastName: string;
    isMember: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = false;

    public user$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({
        firstName: '',
        lastName: '',
        isMember: false
    });

    login(userD: IUser): void {
        this.isLoggedIn = true;
        this.user$.next(userD);
    }

    logout(): void {
        this.isLoggedIn = false;
        this.user$.next({
            firstName: '',
            lastName: '',
            isMember: false
        });
    }

    setMemberToTrue(userD: IUser) : void {
        this.user$.next({
            firstName: userD.firstName,
            lastName: userD.lastName,
            isMember: true
        })

    }
}
