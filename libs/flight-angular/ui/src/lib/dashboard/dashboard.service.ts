import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Flight } from '@hamoye/shared/data-access';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  _flights:BehaviorSubject<Flight[]> = new BehaviorSubject<Flight[]>([]);
  constructor(
    private http: HttpClient
  ) { }

  get flights$(): Observable<Flight[]> {
    return this._flights.asObservable();
  }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>('http://localhost:8080/flights').pipe(
      tap((flights) => {
        this._flights.next(flights);
      })
    );
  }

}
