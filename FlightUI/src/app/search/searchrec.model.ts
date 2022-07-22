import { NgForm, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

export class SearchRec {


    age:number=0;
    bookingId: number=0;
    emailId:string='';
    flighNo:string='';
    flighNoNavigation:string='';
    gender:string='';
    isCancelled:string='';
    meal:string='';
    name:string='';
    pnrno: number=0;
    seatNo: number=0;
   


    // id: number = 0;
    // customerCode: string = '';
    // customerName: string = '';
    // customerAmount: number = 0;
    // formCustomerGroup: FormGroup;//Create
    // constructor() {
    //     var _builder = new FormBuilder();
    //     this.formCustomerGroup = _builder.group({});
    //     this.formCustomerGroup.addControl("CustomerNameControl", new FormControl('', Validators.required));

    //     var validationcollection = [];
    //     validationcollection.push(Validators.required);
    //     validationcollection.push(Validators.pattern("^[0-9]{4,4}$"))
    //     this.formCustomerGroup.addControl("CustomerCodeControl", new FormControl('', Validators.compose(validationcollection)));

    }
