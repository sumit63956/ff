import { NgForm, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

export class Booking {
    bookingId:number=0;
    name: string = '';
    emailId: string = '';
    gender: string = '';
    age: number = 0;
    meal: string = '';
    seatNo: number = 0;
    flighNo: string = '';
    pnr:number=0;



    formBookingGroup: FormGroup;//Create
    constructor() {
        var _builder = new FormBuilder();
        this.formBookingGroup = _builder.group({});
        this.formBookingGroup.addControl("NameControl", new FormControl('', Validators.required));
        this.formBookingGroup.addControl("EmailidControl", new FormControl('', Validators.required));
        this.formBookingGroup.addControl("GenderControl", new FormControl('', Validators.required));
        this.formBookingGroup.addControl("AgeControl", new FormControl('', Validators.required));
        this.formBookingGroup.addControl("MealControl", new FormControl('', Validators.required));
        this.formBookingGroup.addControl("SeatNoControl", new FormControl('', Validators.required));
        this.formBookingGroup.addControl("FlightNoControl", new FormControl('', Validators.required));
        //this.formBookingGroup.addControl("InstrumentControl", new FormControl('', Validators.required));
        // this.formAirlineInventoryGroup.addControl("NoofSeatsControl", new FormControl('', Validators.required));
        //this.formAirlineInventoryGroup.addControl("NoofBCSeatsNoControl", new FormControl('', Validators.required));
        //this.formAirlineInventoryGroup.addControl("NoofNBCSeatsNoControl", new FormControl('', Validators.required));
        //this.formAirlineInventoryGroup.addControl("TicketCostControl", new FormControl('', Validators.required));
        // this.formAirlineInventoryGroup.addControl("NoOfRowsControl", new FormControl('', Validators.required));
        // this.formAirlineInventoryGroup.addControl("ToPlaceidControl", new FormControl('', Validators.required));
        // this.formAirlineInventoryGroup.addControl("FromPlaceIdControl", new FormControl('', Validators.required));

    }





}
