import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.userservice.logout
    this.userservice.logout().subscribe(res => {
      localStorage.removeItem('token');

      this.router.navigate(['']);
    })
    }



}
