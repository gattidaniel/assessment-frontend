import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

import { AlertComponent } from  './components/_directives/index';
import { AuthGuard } from './components/_guards/index';
import { AlertService, AuthenticationService, ClientService, PolicyService } from './components/_services/index';
import { LoginComponent } from './components/login/index';
import { PolicyComponent } from './components/policy/index';


@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        PolicyComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'policies/:clientId/:clientName', component: PolicyComponent, canActivate: [AuthGuard] },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    //exports: [
    //    MatToolbarModule,
    //    MatButtonModule
    //],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        ClientService,
        PolicyService
    ]
    //,    bootstrap: [AppComponent]
})
export class AppModuleShared {
}
