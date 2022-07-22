using BookingServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingServices.ViewModel
{
    public class BookingRegister
    {
        //public int BookingId { get; set; }
        public string name { get; set; }
        public string emailId { get; set; }
        public string gender { get; set; }
        public int? age { get; set; }
        public string meal { get; set; }
        public int? seatNo { get; set; }
       // public long? Pnrno { get; set; }
        //public string IsCancelled { get; set; }
        public string flighNo { get; set; }

        public virtual Schedule FlighNoNavigation { get; set; }
    }
}
