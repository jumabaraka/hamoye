import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { Observable, map, take } from "rxjs";
import { AuthService } from "../auth.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(
    private router: Router,
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //return true
    return this.afAuth.authState.pipe(
      take(1),
      map((user) => {
        if (user) {
          return true
        } else {
          this.router.navigate(['/login']);
          return false
        }
      })
    )
  }

}
