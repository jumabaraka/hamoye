import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '@hamoye/flight-angular/auth';
import { Subject, takeUntil } from 'rxjs';
import { Flight } from '@hamoye/shared/data-access';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'hamoye-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  user: any
  flights!: Flight[];
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private dashboardService: DashboardService
  ) {
  }

  ngOnInit(): void {
    this.authService.user$.pipe(takeUntil(this._unsubscribeAll)).subscribe((user) => {
      console.log("User: ", user);
    }
    );

    this.dashboardService.flights$.pipe(
      takeUntil(this._unsubscribeAll),
    ).subscribe((flights) => {
      this.flights = flights;
      const flightData = this.flights.map((flight: any) => ({
        airport: flight.estDepartureAirport || flight.estArrivalAirport,
        time: new Date(flight.lastSeen * 1000).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          timeZone: 'America/Chicago'
        }),
        arriving: flight.estArrivalAirport ? 1 : 0,
        departing: flight.estDepartureAirport ? 1 : 0,
      }))
      if (flightData.length > 0) {
        this.flights = flightData;
      }
    });

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


}
