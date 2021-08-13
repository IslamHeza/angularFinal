import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userservice: UserService, private router: Router) { }

  email="";
  password="";

  data:any;



  ngOnInit() {
  }

  login(){

return this.userservice.checkCookie().subscribe(res=>
  {
    this.userservice.login({email: this.email ,password:this.password}).subscribe(res=>{
      console.log({res});
      this.data = res;
      localStorage.setItem('token', JSON.stringify(this.data.token));
      console.log(this.data.token);
      this.userservice.isLoggedin = true;
      this.router.navigate(['']);

    })

  })




  }

}
