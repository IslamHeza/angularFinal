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
   allusers:any=[]; 

  constructor(private  projectservice:ProjectService){}

  ngOnInit(): void {
     this.getAllProjects();
     this. getDevelopers();
  }
 getAllProjects(){
    this.projectservice.getAllProject().subscribe(res => {
      console.log(res);
      this.allprojects= res ;
    });
  }
 
  getDevelopers(){
    this.projectservice.getDevelopers().subscribe(res => {
      console.log(res);
      this.allusers= res ;
      
    });
  }

  updateProject(){

  }

  deleteProject(event:any , id:any){
    event.preventDefault()
    return this.projectservice.deleteProject(id).subscribe(res => {
      this.getAllProjects();
    });
  }



}
