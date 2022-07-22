import { DashboardComponent } from "../dashboard/dashboard.component";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { AuthgaurdService } from "../services/authgaurd.service";

export const Mainroutes = [
  { path: '', component: HomeComponent },
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'dashboard',
   canActivate:[AuthgaurdService],
  component: DashboardComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'Airline', loadChildren:()=>import('../airline/airline.module').then(m=>m.AirlineModule) },
  { path: 'Booking', loadChildren:()=>import('../booking/booking.module').then(m=>m.BookingModule) },
  { path: 'Search', loadChildren:()=>import('../search/search.module').then(m=>m.SearchModule) },
  { path: 'AirlineInventory', loadChildren:()=>import('../airlineinventory/airlineinventory.module').then(m=>m.AirlineInventoryModule) }
];


