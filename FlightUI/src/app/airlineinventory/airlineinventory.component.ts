import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

import { AirlineInventory } from './airlineinventory.model';

@Component({
  templateUrl: './airlineinventory.component.html'
})
export class AirlineInventoryComponent {

  constructor(private http: HttpClient) {

  }




  ngOnInit(): void {
    this.GetAirlineInventoryData();
  }

  GetAirlineInventoryData() {
    this.http.get("https://localhost:44337/api/Airline/findallinventory").subscribe(res => this.GetInventoryFromServer(res), res => console.log(res));
  }
  GetInventoryFromServer(res: any) {
    console.log(res);
    this.AirlineInventoryModels = res;
  }

  

  AirlineInventoryModel: AirlineInventory = new AirlineInventory();
  AirlineInventoryModels: Array<AirlineInventory> = new Array<AirlineInventory>();

  OnRadioOptionChange(option: string) {
    if (option == 'onwardTrip') {
      this.AirlineInventoryModel.trip = "OW";
    }
    else {
      this.AirlineInventoryModel.trip = "RT";
    }

  }

  OnRadioOptionChangeMeal(option: string) {
    if (option == 'Veg') {
      this.AirlineInventoryModel.meal = "VG";
    }
    else {
      this.AirlineInventoryModel.meal = "NG";
    }

  }

  AddAirlineInventory() {

    var airlineinventoryto = {

      flighNo: this.AirlineInventoryModel.flighNo,
      airlineId: Number(this.AirlineInventoryModel.airlineId),
      frmPlace: this.AirlineInventoryModel.frmPlace,
      toPlace: this.AirlineInventoryModel.toPlace,
      strtDate: this.AirlineInventoryModel.strtDate,
      endDate: this.AirlineInventoryModel.endDate,
      scheduleId: Number(this.AirlineInventoryModel.scheduleId),
      instrument: this.AirlineInventoryModel.instrument,
      noOfSeats: Number(this.AirlineInventoryModel.noOfSeats),
      noOfBCSeats: Number(this.AirlineInventoryModel.noOfBCSeats),
      noOfNBCSeats: Number(this.AirlineInventoryModel.noOfNBCSeats),
      ticketCost: Number(this.AirlineInventoryModel.ticketCost),
      noOfRows: Number(this.AirlineInventoryModel.noOfRows),
      meal: (this.AirlineInventoryModel.meal == '' ? "VG" : this.AirlineInventoryModel.meal),

      trip: (this.AirlineInventoryModel.trip == '' ? "OW" : this.AirlineInventoryModel.trip),
      toPlaceId: Number(this.AirlineInventoryModel.toPlaceId),
      fromPlaceId: Number(this.AirlineInventoryModel.fromPlaceId)




    }
    console.log(airlineinventoryto);
    console.log(this.AirlineInventoryModel);
    this.http.post("https://localhost:44337/api/Airline/reginv", airlineinventoryto).subscribe(res => console.log(res), res => console.log(res));

    this.AirlineInventoryModel = new AirlineInventory();

  }
  // BlockAirline(air:Airline)
  // {
  //   //var airlineId= air.airlineId;
  //   let httparms = new HttpParams().set("airlineId", air.airlineId);
  //    let options = { params: httparms };
  //   this.http.put("https://localhost:44337/api/Airline/airlineblock", options).subscribe(res => console.log(res), res => console.log(res));
  // }

  //   EditCustomer(cust: Customer) {
  //     this.CustomerModel = cust;
  //   }
  //   DeleteCustomer(cust: Customer) {
  //     console.log(cust);
  //     let httparms = new HttpParams().set("Id", cust.id);
  //     let options = { params: httparms };
  //     // this.CustomerModels=this.arrayRemove( this.CustomerModels,Customer)
  //     this.http.delete("https://localhost:44318/api/Customer/delete", options).subscribe(res => { this.GetCustomerData(); console.log(res) }, res => console.log(res));

  //   }

  //   arrayRemove(arr: any, value: any) {
  //     return arr.filter(function (sample: any) {
  //       return sample != value;
  //     });
  //   }

  //   hasError(typeofvalidator: string, controlname: string): Boolean {
  //     return this.CustomerModel.formCustomerGroup.controls[controlname].hasError(typeofvalidator);
  //   }


  hasError(typeofvalidator: string, controlname: string): Boolean {
    return this.AirlineInventoryModel.formAirlineInventoryGroup.controls[controlname].hasError(typeofvalidator);
  }
}
