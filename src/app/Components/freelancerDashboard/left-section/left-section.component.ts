import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {

  constructor(private userService:UserService) { }

  readonly :boolean = true;
  cancel :boolean = false;
  user:User= new User();
  data : any ;
  rate : number = 0 ;

  ngOnInit(): void {
    this.getUser(2);
  }

  getUser(id:any){
    return this.userService.getUser(id).subscribe(res => {
      console.log(res);
      this.data = res;
      this.user = this.data ;
      this.rate = this.user.rate ;
    })
  }


}
