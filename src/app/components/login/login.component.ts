import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../const/const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  password: string = "";
  isPassWrong: boolean = false;
  isLoggedIn: boolean = true;
  constructor(private router: Router) { }

  loginUser(event: any) {
    event.preventDefault();
    if (UserData.findIndex(user => (user.userName === this.userName) && (user.password === this.password)) !== -1) {
      localStorage.setItem("loggedInUser", this.userName);
      this.router.navigate(['/home']);
    }
    else {
      this.isPassWrong = true;
      setTimeout(() => {
        this.isPassWrong = false;
      }, 5000);
    }
  }

  ngOnInit() {
    if (localStorage.getItem("loggedInUser")) {
      this.router.navigate(['/home']);
    }
    else {
      this.isLoggedIn = false;
    }
  }

}
