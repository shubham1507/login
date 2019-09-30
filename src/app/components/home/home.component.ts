import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    if (localStorage.getItem("loggedInUser")) {
      this.isLoggedIn = true;
    }
    else {
      this.router.navigate(['/login']);
    }
  }

}
