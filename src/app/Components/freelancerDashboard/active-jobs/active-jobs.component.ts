import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';
import { Project } from 'src/app/_models/project';

@Component({
  selector: 'app-active-jobs',
  templateUrl: './active-jobs.component.html',
  styleUrls: ['./active-jobs.component.css'],
})
export class ActiveJobsComponent implements OnInit {
  constructor(private projectService: ProjectService , private route:Router) {}

  ActivProjects: any = [];
  data: any;
  userId : any ;
  empty:any ;
  ngOnInit(): void {
    this.userId = localStorage.getItem('id');  
    this.getActiveProjects(this.userId);
    if (this.ActivProjects.length==0) this.empty= true ;
  }

  getActiveProjects(id: any) {
    this.projectService.getActiveProjects(id).subscribe((res) => {
      this.data = res;
      this.ActivProjects = this.data;
    });
  }

  viewProject(id:any){
    this.route.navigate(['viewproject/'+id]);
  }
}
