import { Component, OnInit } from '@angular/core';
import { Catagory } from 'src/app/_models/catagory';
import { CatagoriesService } from 'src/app/service/catagories.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {

  data: any;
  allcatagories:any=[];

  constructor( private userservice: UserService,public catlist:CatagoriesService ) { }

  ngOnInit(): void {

    this.getAllCatagories();

  }

  getAllCatagories(){
   return this.catlist.getAllCatagories().subscribe(res =>{
      console.log(res);
      this.allcatagories=res;
    }
    )
  }




}
