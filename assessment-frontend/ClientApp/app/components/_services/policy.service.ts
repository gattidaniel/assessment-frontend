import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Policies } from '../_models/index';

@Injectable()
export class PolicyService {
    constructor(private http: Http) { }

    getAllByUser(clientId: string) {
        return this.http.get('http://www.mocky.io/v2/580891a4100000e8242b75c5').map(function (res) {
            var policies = <Policies>res.json();
            return policies.policies.filter(u => u.clientId == clientId);
        });
    }
}