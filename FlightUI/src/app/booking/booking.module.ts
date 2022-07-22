import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { Bookingroutes } from '../routing/bookingroutes';

import { BookingComponent } from './booking.component';


@NgModule({
    declarations: [
        BookingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(Bookingroutes),
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [BookingComponent]
})
export class BookingModule { }
