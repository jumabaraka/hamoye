import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '@hamoye/flight-angular/auth';
import { Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'hamoye-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: any
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {
  }

  ngOnInit(): void {
    this.authService.user$.pipe(takeUntil(this._unsubscribeAll)).subscribe((user) => {
      console.log("User: ", user);
    }
    );
  }
}
