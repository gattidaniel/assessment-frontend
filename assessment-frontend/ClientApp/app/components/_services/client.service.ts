import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Clients } from '../_models/index';

@Injectable()
export class ClientService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://www.mocky.io/v2/5808862710000087232b75ac').map(function (res) {
            return <Clients>res.json();
        });
    }
}