using BookingServices.Models;
using BookingServices.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {

        //IAirlineService airlineService;
        FlightDBContext db;
        public BookingController(FlightDBContext _db)
        {
            //airlineService = _airlineService;
            db = _db;
        }

        
        [HttpGet("findall")]
        //("api/v1.0/flight/airline/findall")]
        //[Route("findall")]
        //[HttpGet]
        public IActionResult FindAll()
        {
            try
            {
                return Ok(db.UserBookings.ToList());
            }
            catch
            {
                return BadRequest();
            }
        }



        //[HttpPost("/api/v1.0/flight/booking")]
        [HttpPost("booking")]
        //[Authorize]
         //public IActionResult Register([FromBody] BookingRegister rg)
        public IActionResult Register(BookingRegister rg)
        {

            try
            {
                UserBooking reg = new UserBooking();
                Random random = new Random();
                reg.Name = rg.name;
                reg.EmailId = rg.emailId;
                reg.Gender = rg.gender;
                reg.Age = rg.age;
                reg.Meal = rg.meal;
                reg.SeatNo = rg.seatNo;
                reg.Pnrno = random.Next(100, 500);
                reg.IsCancelled = "N";
                reg.FlighNo = rg.flighNo;
                db.UserBookings.Add(reg);
                db.SaveChanges();

                return Ok("Ticket Booked Successfully , Your PNR is "+reg.Pnrno);

            }
            catch(Exception ex)
            {
                return BadRequest();
            }


        }

        //[HttpDelete("/api/v1.0/flight/booking/cancel/{pnr}")]
        [HttpDelete("cancel/{bookingId}")]
        public IActionResult CancelTicket(int bookingId)
        {

            try
            {
                if (db.UserBookings.Any(x => x.BookingId == bookingId))
                {
                    var data = db.UserBookings.Where(x => x.BookingId == bookingId).FirstOrDefault();
                    db.UserBookings.Remove(data);
                    db.SaveChanges();
                    return Ok("Ticket Cancelled Successfully");

                }
                else
                {
                    return BadRequest();
                }
               

            }
            catch (Exception ex)
            {
                return BadRequest();
            }


        }



    }
}
