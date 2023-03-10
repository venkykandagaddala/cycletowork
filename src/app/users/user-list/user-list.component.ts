import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: any = [];
  isLoading : boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoading = true;
    this.users = this.userService.getUsers().subscribe((resData: any) => {
    this.users = resData;
    this.isLoading = false;
   })
  }
}
