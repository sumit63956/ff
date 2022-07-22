import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';
import { AirlineComponent } from './airline.component';
import { Airlineroutes } from '../routing/airlineroutes';


@NgModule({
    declarations: [
        AirlineComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(Airlineroutes),
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [AirlineComponent]
})
export class AirlineModule { }
