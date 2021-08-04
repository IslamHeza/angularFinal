import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCoffee, faComment, faDownload, faHome, faSignal, faSlidersH, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/_models/user';
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
  user = new User;
  data:any;
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
  this.getAllUsers();
  this.userService.getUser(this.route.snapshot.params.id).subscribe(res =>{
    this.data = res;
    this.user = this.data;
  })
  }
  getAllUsers(){
    return this.userService.getAllUsers().subscribe(res => {
      // console.log(res);
      this.allUsers = res;
    })
  }
  deleteUser(e:any,id:any){
    e.preventDefault();
    return this.userService.deleteUser(id).subscribe(res => {
      this.getAllUsers();
    })
  }
  updateUser(){
    this.userService.updateUser(this.route.snapshot.params.id,this.user).subscribe(res =>{
      return this.router.navigate(['']);
    })
  }
}
