import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {

  constructor(private http: HttpClient) {


  }

  ngOnInit(): void {
    this.GetBookingData();
  }
  BookingModel: Booking = new Booking();
  BookingModels: Array<Booking> = new Array<Booking>();
  GetBookingData() {
    this.http.get("https://localhost:44343/api/Booking/findall").subscribe(res => this.GetFromServer(res), res => console.log(res));
  }
  GetFromServer(res: any) {
    console.log(res);
    this.BookingModels = res;
  }

  DeleteTicket(book: Booking) {
    console.log(book);
    var bookingId = book.bookingId;
    var cancelticketurl = "https://localhost:44343/api/Booking/cancel/" + bookingId;
    this.http.delete(cancelticketurl).subscribe(res => this.GetFromServer(res), res => console.log(res))
    this.GetBookingData();
  
  
  }
  BookTicket() {
    var bookingto = {
      name: this.BookingModel.name,
      emailId: this.BookingModel.emailId,
      gender: this.BookingModel.gender,
      age: Number(this.BookingModel.age),
      meal: this.BookingModel.meal,
      seatNo: Number(this.BookingModel.seatNo),
      flighNo: this.BookingModel.flighNo
    }
 
    this.http.post("https://localhost:44343/api/Booking/booking", bookingto).subscribe(res => console.log(res), res => console.log(res));

    this.GetBookingData();
  }



  hasError(typeofvalidator: string, controlname: string): Boolean {
    return this.BookingModel.formBookingGroup.controls[controlname].hasError(typeofvalidator);

  }
}
