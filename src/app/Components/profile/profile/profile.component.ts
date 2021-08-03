import { Component, OnInit } from '@angular/core';
import { faCoffee, faComment, faDownload, faHome, faSignal, faSlidersH, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  faCoffee = faCoffee;
  fadownload= faDownload;
  faslide= faSlidersH;
  faHome=faHome;
  faUser=faUser;
  faComment=faComment;
  val:number=2;
  allUsers:any=[];
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
