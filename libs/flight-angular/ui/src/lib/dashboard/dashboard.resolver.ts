import { Injectable } from '@angular/core';
import {
  Router, 
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { Flight } from '@hamoye/shared/data-access';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver {

  constructor(
    private dashboardService: DashboardService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight[]> {
    return this.dashboardService.getFlights();
  }
}
