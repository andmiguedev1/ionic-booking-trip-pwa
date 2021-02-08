import { Component } from "@angular/core";

import { BookingService } from "./../../../services/data/bookings/booking.service";

@Component({
  selector: "app-my-bookings",
  templateUrl: "./my-bookings.page.html",
  styleUrls: ["./my-bookings.page.scss"],
})
export class MyBookingsPage {
  itineraryFlights: Array<any> = [];

  constructor(private BookingService: BookingService) {
    this.fetchItineraryFlights();
  }

  fetchItineraryFlights() {
    this.BookingService.getFlightBookings().then((itinerary) => {
      this.itineraryFlights = itinerary;
    });
  }
}
