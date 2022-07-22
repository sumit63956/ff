import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';


import { AirlineInventoryComponent } from './airlineinventory.component';
import { Airlineinventoryroutes } from '../routing/airlineinventoryroutes';


@NgModule({
    declarations: [
        AirlineInventoryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(Airlineinventoryroutes),
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [AirlineInventoryComponent]
})
export class AirlineInventoryModule { }
