import { Component, OnInit } from '@angular/core';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  val:number=2;
  faSignal=faSignal;
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
