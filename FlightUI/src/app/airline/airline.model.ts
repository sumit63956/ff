import { NgForm, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

export class Airline {
    airlineId:number=0;
    name:string='';
    updateLogo:string='';
    contactNumber:string='';
    contactAdd:string='';
    available:string='';
    
    
    
    // id: number = 0;
    // customerCode: string = '';
    // customerName: string = '';
    // customerAmount: number = 0;
     formAirlineGroup: FormGroup;//Create
    constructor() {
        var _builder = new FormBuilder();
        this.formAirlineGroup = _builder.group({});
        this.formAirlineGroup.addControl("AirlineNameControl", new FormControl('', Validators.required));
        this.formAirlineGroup.addControl("AirlineLogoControl", new FormControl('', Validators.required));
        this.formAirlineGroup.addControl("AirlineContactControl", new FormControl('', Validators.required));
        this.formAirlineGroup.addControl("AirlineAddControl", new FormControl('', Validators.required));    
        // var validationcollection = [];
        // validationcollection.push(Validators.required);
        // validationcollection.push(Validators.pattern("^[0-9]{4,4}$"))
        // this.formAirlineGroup.addControl("CustomerCodeControl", new FormControl('', Validators.compose(validationcollection)));

    }

}