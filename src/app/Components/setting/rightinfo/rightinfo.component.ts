import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-rightinfo',
  templateUrl: './rightinfo.component.html',
  styleUrls: ['./rightinfo.component.css']
})
export class RightinfoComponent implements OnInit {
  user = new User;
  data:any;
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.userService.getUser(this.route.snapshot.params.id).subscribe(res =>{
      this.data = res;
      this.user = this.data;
    })
    // console.log(this.route.snapshot.params.id);
  }
  updateUser(){
    this.userService.updateUser(this.route.snapshot.params.id,this.user).subscribe(res =>{
      // console.log(this.user);
      return this.router.navigate(["/profile"]);
    })
  }
}
