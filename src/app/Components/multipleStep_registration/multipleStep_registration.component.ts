import { Component, OnInit } from '@angular/core';

import { Router ,ActivatedRoute } from '@angular/router';
import { CatagoriesService } from 'src/app/service/catagories.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/_models/user';

import { Location } from '@angular/common';


@Component({
  selector: 'app-multipleStep_registration',
  templateUrl: './multipleStep_registration.component.html',
  styleUrls: ['./multipleStep_registration.component.css']
})
export class MultipleStep_registrationComponent implements OnInit {
  values: string[] = [];

  allcatagories:any=[];
  user = new User();
  data: any;
  // passingdata:any;

  constructor(private userservice: UserService, private location:Location , private activatedRoute:ActivatedRoute,private router: Router , public catlist:CatagoriesService ) {

  }
  ngOnInit(): void {

    this.getAllCatagories();
    console.log(this.location.getState());
  }

  register() {
console.log(this.user.category_id);
    return this.userservice.register(this.user).subscribe(res => {
      console.log({res});
      this.data = res;
      //  localStorage.setItem('data',this.data);
    localStorage.setItem('token', JSON.stringify(this.data.token));
    // this.userservice.isLoggedin = true;
    console.log(this.data.user.id);
    // this.router.navigateByUrl('/home', { state: this.passingdata });
      this.router.navigate(['']);
    })

  };



  private selectedLink: string = "Developer";

  setradio(e: string): void {

    this.selectedLink = e;

  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown
      return false;

    }

    return (this.selectedLink === name); // if current radio button is selected, return true, else return false
  }

  getAllCatagories(){
    return this.catlist.getAllCatagories().subscribe(res =>{
       console.log(res);
       this.allcatagories=res;
     }
     )
   }










}


