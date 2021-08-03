import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  allUsers:any=[]
  constructor(private userService:UserService) { }
  ngOnInit(): void {
  this.getAllUsers();
  }
  getAllUsers(){
    return this.userService.getAllUsers().subscribe(res => {
      // console.log(res);
      this.allUsers = res;
    })
  }
}
