import { Component, OnInit } from '@angular/core';
import { faDumpster } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false;
  faDumpster = faDumpster;
  
  isLogged: boolean = false;

  constructor(private loginService: LoginService) {
    this.loginService.currentLoginStatus$.subscribe(status => {
      this.isLogged = status;
    });
  }

  handleToggle() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.loginService.userLogout();
  }
}
