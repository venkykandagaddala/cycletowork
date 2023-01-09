import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId: number = 0;
  user: any;


  constructor(private userService: UserService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId =  +this.route.snapshot.params["id"];
    this.user = this.userService.getUser(this.userId).subscribe((resData: any) => {
      console.log(resData);
      this.user = resData;
    })
  }

}
