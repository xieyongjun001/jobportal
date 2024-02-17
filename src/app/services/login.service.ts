import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import{AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn$ = new BehaviorSubject<boolean>(false);

  currentLoginStatus$ = this.loggedIn$.asObservable();

  constructor(private fireauth: AngularFireAuth,private router: Router) {
    this.loggedIn$.next(localStorage.getItem('loggedIn') === 'true');
   }

  get isLoggedIn(): boolean {
    return this.loggedIn$.value;
  }

  userLogin(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      this.loggedIn$.next(true);
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/jobs']);
    },err=>{
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }
  

  userLogout() {
    // this.login.next(false);
    // this.router.navigateByUrl('/login')

    this.fireauth.signOut().then(()=>{
      this.loggedIn$.next(false);
      localStorage.setItem('loggedIn', 'false');
      this.router.navigate(['/login']);
    },err=>{
      alert(err.message);
    })
  }
}