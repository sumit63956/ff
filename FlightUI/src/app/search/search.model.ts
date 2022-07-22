import { NgForm, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

export class Search {
    emailId:string='';
    pnrno:string='';
    bookingId:number=0;



    formSearchGroup: FormGroup;//Create
        constructor() {
        var _builder = new FormBuilder();
        this.formSearchGroup = _builder.group({});
        this.formSearchGroup.addControl("PnrControl", new FormControl('', Validators.required));
        this.formSearchGroup.addControl("EmailControl", new FormControl('', Validators.required));
    }


    
    }
