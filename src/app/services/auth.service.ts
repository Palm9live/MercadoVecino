import { Injectable, Inject } from '@angular/core';
import {
  Auth,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebase.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(FIREBASE_AUTH) private auth: Auth) {}

  get currentUser(): User | null {
    return this.auth.currentUser;
  }

  get authState$(): Observable<User | null> {
    return new Observable<User | null>((subscriber) => {
      return onAuthStateChanged(this.auth, subscriber.next, subscriber.error);
    });
  }

  async signIn(email: string, password: string): Promise<User> {
    const credential = await signInWithEmailAndPassword(this.auth, email, password);
    return credential.user;
  }

  async signUp(email: string, password: string): Promise<User> {
    const credential = await createUserWithEmailAndPassword(this.auth, email, password);
    return credential.user;
  }

  async signOut(): Promise<void> {
    await signOut(this.auth);
  }
}
