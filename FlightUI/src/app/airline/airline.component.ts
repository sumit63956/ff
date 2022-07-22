import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from './airline.model';

@Component({
  templateUrl: './airline.component.html'
})
export class AirlineComponent {

  constructor(private http: HttpClient,private _router:Router) {


  }
  ngOnInit(): void {
    this.GetAirlineData();
  }

  GetAirlineData() {
    this.http.get("https://localhost:44337/api/Airline/findall").subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.AirlineModels = res;
  }

  //title = 'sample-project';
  //samplename = "Vikash Verma";

  AirlineModel: Airline = new Airline();
  AirlineModels: Array<Airline> = new Array<Airline>();

  AddAirline() {
    
    var airlineto = {
      name: this.AirlineModel.name,

      updateLogo: this.AirlineModel.updateLogo,
      contactNumber: this.AirlineModel.contactNumber,
      contactAdd: this.AirlineModel.contactAdd,
      //available: this.AirlineModel.available
    }
    console.log(airlineto);
    console.log(this.AirlineModel);
    //this.http.post("https://localhost:44364/api/v1.0/flight/airline/register", airlineto).subscribe(res => { this.GetCustomerData(); console.log(res) }, res => console.log(res));
    //this.http.post("https://localhost:44364/api/v1.0/flight/airline/register", airlineto).subscribe(res => console.log(res), res => console.log(res));
    this.http.post("https://localhost:44337/api/Airline/airlinereg", airlineto).subscribe(res => console.log(res), res => console.log(res));
    this.http.get("https://localhost:44337/api/Airline/findall").subscribe(res => this.GetFromServer(res), res => console.log(res));
    this.AirlineModel = new Airline();
    //this.GetAirlineData();
  }


  AddInventory()
  {
    this._router.navigate(['AirlineInventory/Add']);
  }


  BlockAirline(air:Airline)
  {
    var airlinetid = {
      airlineId: air.airlineId,
    }
    
    
    //var airlineId= air.airlineId;
    //let httparms = new HttpParams().set("airlineId", air.airlineId);
     //let options = { params: httparms };
    this.http.put("https://localhost:44337/api/Airline/airlineblock", airlinetid).subscribe(res => console.log(res), res => console.log(res));
  }

//   EditCustomer(cust: Customer) {
//     this.CustomerModel = cust;
//   }
  DeleteAirline(air: Airline) {
    console.log(air);
    var airlineId = air.airlineId;
    var airlineurl = "https://localhost:44337/api/Airline/airlinedel/" + airlineId;
    this.http.delete(airlineurl).subscribe(res => this.GetFromServer(res), res => console.log(res))
    this.GetAirlineData();
  
  
  }







//   arrayRemove(arr: any, value: any) {
//     return arr.filter(function (sample: any) {
//       return sample != value;
//     });
//   }

  hasError(typeofvalidator: string, controlname: string): Boolean {
    return this.AirlineModel.formAirlineGroup.controls[controlname].hasError(typeofvalidator);
  }

}
