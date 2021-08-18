import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/service/project.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  val:number=3
  searchjob:String="";


  allprojects:any=[];

  constructor(private ProjectService:ProjectService,private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
     this.getAllProjects();
    
  }

 getAllProjects(){
    return this.ProjectService.getAllProjects().subscribe(res => {
      this.allprojects= res ;
      console.log(this.allprojects);

     
    });
  }

  updateProject(){
  }

  deleteProject(event:any , id:any){
    event.preventDefault()
    return this.ProjectService.deleteProject(id).subscribe(res => {
      this.getAllProjects();
    });
  }



}
