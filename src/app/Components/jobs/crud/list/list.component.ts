import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private ProjectService:ProjectService){}

  ngOnInit(): void {
     this.getAllProjects();

  }

 getAllProjects(){
    this.ProjectService.getAllProjects().subscribe(res => {
      console.log(res);
      this.allprojects= res ;
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
