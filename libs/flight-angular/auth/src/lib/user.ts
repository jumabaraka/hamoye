import { User } from '@angular/fire/auth';


export interface AUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  phoneNumber: string;
}

export defaultUser: User = [
  uid: '',
]
