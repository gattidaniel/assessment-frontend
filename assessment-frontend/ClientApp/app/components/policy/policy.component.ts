import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Policy } from '../_models/index';
import { PolicyService } from '../_services/index';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'policy.component.html'
})

export class PolicyComponent implements OnInit {
    currentUser: any;
    policies: Policy[];
    clientId: any;
    clientName: any;

    constructor(private policyService: PolicyService, private location: Location, private route: ActivatedRoute) {
        try {
            this.clientId = this.route.snapshot.paramMap.get('clientId'); 
            this.clientName = this.route.snapshot.paramMap.get('clientName'); 
        }
        catch (e) {

        }
    }

    ngOnInit() {
        this.loadPolicies();
    }

    private loadPolicies() {
        this.policyService.getAllByUser(this.clientId).subscribe(res => { this.policies = res; });
    }

    goBack(): void {
        this.location.back();
    }
}