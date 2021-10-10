import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode'

@Injectable({
    providedIn: 'root'
})
export class UserService {


    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() &&
            this.decodeAndNotify()
    }

    private userSubject = new Subject<User>()

    setToken(token) {
        this.tokenService.setToken(token)
        this.decodeAndNotify()
    }

    getUser() {
        return this.userSubject.asObservable()
    }

    decodeAndNotify() {
        const token = this.tokenService.getToken()
        const user = jwt_decode(token) as User
        this.userSubject.next(user)
    }
}