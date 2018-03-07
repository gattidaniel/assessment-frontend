import { Component, OnInit } from '@angular/core';

import { Clients } from '../_models/index';
import { ClientService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: any;
    clients: Clients;

    constructor(private clientService: ClientService) {
        try {
            if (typeof window !== 'undefined') {
                this.currentUser = localStorage.getItem('currentUser');
            }
        }
        catch (e) {

        }
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    private loadAllUsers() {
        this.clientService.getAll().subscribe(res => { this.clients = res; });
    }
}