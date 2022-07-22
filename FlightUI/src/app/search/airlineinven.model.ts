import { NgForm, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

export class Airlineinven {

    flighNo: string = '';
    airlineId: number = 0;
    frmPlace: string = '';
    toPlace: string = '';
    strtDate: string = '';
    endDate: string = '';
    scheduleId: number = 0;
    instrument: string = '';
    noOfSeats: number = 0;
    noOfBCSeats: number = 0;
    noOfNBCSeats: number = 0;
    ticketCost: number = 0;
    noOfRows: number = 0;
    meal: string = '';
    trip: string = '';
    toPlaceId: number = 0;
    fromPlaceId: number = 0;
}