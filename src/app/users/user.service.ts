import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, pipe}  from "rxjs";
import { User } from "./user.model";
import { environment } from "src/environments/environment";

@Injectable()
export class UserService {
  public users: any = [];

  constructor(private http: HttpClient){}

  getUsers() {
    return this.http.get<any[]>(environment.apiUrl+"/users")
      .pipe(
        map((respData: any) => {
          const resp = respData.users;
          return resp
        })
      )
  }

  getUser(index: number) {
    return this.http.get<any>(environment.apiUrl+"/users/"+ index)
      .pipe(
        map((respData: any) => {
          const resp = respData;
          return resp
        })
      )
  }
  
}