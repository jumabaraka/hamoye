import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.default.User | null>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user$ = afAuth.authState;

  }

  login(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);
        this.router.navigate(['/']);
      });
  }
}
