import { NgForm, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

export class AirlineInventory {

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

  formAirlineInventoryGroup: FormGroup;//Create
  constructor() {
    var _builder = new FormBuilder();
    this.formAirlineInventoryGroup = _builder.group({});
     this.formAirlineInventoryGroup.addControl("FlightNoControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("AirlineIDControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("FromPlaceControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("ToPlaceControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("StartDateControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("EndDateControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("ScheduleIDControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("InstrumentControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("NoofSeatsControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("NoofBCSeatsNoControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("NoofNBCSeatsNoControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("TicketCostControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("NoOfRowsControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("ToPlaceidControl", new FormControl('', Validators.required));
    this.formAirlineInventoryGroup.addControl("FromPlaceIdControl", new FormControl('', Validators.required));

  }

}
