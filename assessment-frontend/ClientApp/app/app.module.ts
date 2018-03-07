import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
//import { routing } from './components/app.routing';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

import { AlertComponent } from  './components/_directives/index';
import { AuthGuard } from './components/_guards/index';
import { AlertService, AuthenticationService, ClientService } from './components/_services/index';
import { LoginComponent } from './components/login/index';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        ClientService
    ]
    //,    bootstrap: [AppComponent]
})
export class AppModuleShared {
}
