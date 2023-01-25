import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Auth } from "./auth.model";
import { pipe, map } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {
  loggedInUser: Auth;

  constructor(private http: HttpClient) {

  }

  login(userData: any) {
    return this.http.post<Auth>(environment.apiUrl+'/auth/login', userData)
      .pipe(
        map((resp: Auth) => {
          return resp;
        })
      )
  }

}