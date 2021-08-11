import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/service/project.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  Project:Project  =new Project ();

  constructor(private ProjectService:ProjectService , private router:Router) { }
    title:string = "hello" ;
  skills: string[] = [""];
  multiple:boolean = true ;
  ngOnInit(): void {

    this.Project.rate=1;
    this.Project.developer_id=1;
    this.Project.owner_id=1;
  }

   addproject(){
     return this.ProjectService.addPortproject(this.Project).subscribe(res=>{
       console.log(res);
       this.router.navigate(['listproject']) ;
     })
   }
}
