import { Component, OnInit } from '@angular/core';
import { CatagoriesService } from 'src/app/service/catagories.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/_models/user';
import { Catagory } from 'src/app/_models/catagory';
@Component({
  selector: 'app-selected-cat',
  templateUrl: './selected-cat.component.html',
  styleUrls: ['./selected-cat.component.css']
})
export class SelectedCatComponent implements OnInit {
   developers:User= new User();
   Developers:any=[];
   catagories:Catagory[]=[];
   searchCity:String="";
   searchName:String="";
   searchRate:number=0 ;
   data:any ;
   catagory:any=[];
   categoryName:any;
  constructor(public selectcat:CatagoriesService ,public ar:ActivatedRoute  ,private httpClient : HttpClient) { }
   ngOnInit(): void {
    this.view();
    this.httpClient.get("http://localhost:8000/api/categories/").subscribe(res=>{
      this.catagories=res as Catagory [] ;

    })
}
  view(){
    this.selectcat.getCatagory(this.ar.snapshot.params.name).subscribe(res=>{
        this.categoryName=this.ar.snapshot.params.name;
        this.Developers=res as User [];
        console.log(res);
      })
  }




  readonly:boolean=true;
  cancel:boolean=false;
}
