import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Clients } from '../_models/index';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email: string) {
        return this.http.get('http://www.mocky.io/v2/5808862710000087232b75ac')
            .map((resp) => {
                var users = <Clients>resp.json();
                var user = users.clients.filter(u => u.email == email)[0];

                if (user === undefined) {
                    throw new Error("Login failed. Email is not ok.");
                }

                if (typeof window !== 'undefined') {
                    localStorage.setItem('currentUser', user.email);
                }
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}