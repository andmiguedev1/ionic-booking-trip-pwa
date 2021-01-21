import { Injectable } from "@angular/core";
import { Flight } from "./../../../models/interfaces/flight.interface";
import { DEPARTING } from "./departing-flights";

@Injectable({
  providedIn: "root",
})
export class DepartureService {
  departures: any;
  selectFlight: any;
  availableDepartures: Array<Flight> = [];

  constructor() {
    this.departures = DEPARTING;
  }

  getRecentDepartures() {
    return this.departures;
  }

  setDepartureFlight(selectFlight) {
    this.selectFlight = selectFlight;
  }

  getDepartureFlight() {
    return this.selectFlight;
  }
}
