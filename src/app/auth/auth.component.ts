import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../shared/message/message.service';
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
    private router: Router,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    if (this.loginform.valid) {
      this.formSubmitting = true
      this.userCredentials.username = this.loginform.value.username;
      this.userCredentials.password = this.loginform.value.password;
      this.authService.login(this.userCredentials).subscribe((resp: Auth) => {
        this.formSubmitting = false;
        this.messageService.sucessMessage.next("Succesfully logged in.");
        this.router.navigate(["/products"])
      }, error => {
        this.formSubmitting = false;
        this.messageService.errorMessage.next(error.error.message);
        this.loginform.reset();
      })
    } else {
      this.formSubmitting = false;
      this.messageService.errorMessage.next("Please enter a valid credientials.");
      this.loginform.reset();
    }
    
  }

}
