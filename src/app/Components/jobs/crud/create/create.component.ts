import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/service/project.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/_models/user';
import { CatagoriesService } from 'src/app/service/catagories.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  Project:Project  =new Project ();
  allcatagories:any=[];
   user = new User();
   data: any;

  constructor(private ProjectService:ProjectService , private router:Router ,public catlist:CatagoriesService ,private userservice: UserService) { }

  multiple:boolean = true ;
  ngOnInit(): void {

    this.Project.developer_id=0;
    this.Project.owner_id=0;
    this.Project.rate=0;
    this.Project.status=" ";
    this.Project.final_price=0;

    this.getAllCatagories();
  }

   addproject(){
     return this.ProjectService.addPortproject(this.Project).subscribe(res=>{
       console.log(this.Project.category_id);
       this.router.navigate(['listproject']) ;

     })
   }


   getAllCatagories(){
    return this.catlist.getAllCatagories().subscribe(res =>{
       console.log(res);
       this.allcatagories=res;
     }
     )
   }
}
