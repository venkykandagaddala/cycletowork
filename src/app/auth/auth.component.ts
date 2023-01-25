import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from './auth.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('f') loginform: NgForm;
  error: string;
  userCredentials = {
    username: '',
    password: ''
  };
  errorMessge = ''
  formSubmitting: boolean = false;
  password: string;
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    if (this.loginform.valid) {
      this.formSubmitting = true
      this.userCredentials.username = this.loginform.value.username;
      this.userCredentials.password = this.loginform.value.password;
      this.authService.login(this.userCredentials).subscribe((resp: Auth) => {
        if (resp.id) {
          this.formSubmitting = false;
          this.router.navigate(["/products"])
        } else {
          
        }
      })
    }
    
  }

}
