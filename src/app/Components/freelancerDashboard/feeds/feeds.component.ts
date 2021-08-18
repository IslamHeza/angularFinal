import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';
import { Project } from 'src/app/_models/project';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  constructor(private projectService :ProjectService , private rout:Router) { }

  recentProjects : any;
  developerCategory : any ;
  userId : any ;
  
  ngOnInit(): void {
    this.userId = localStorage.getItem('id');  
    this.getRecentProject(this.userId);
  }
  

  getRecentProject(cateogry_id:any){
    this.projectService.getRecentProject(cateogry_id).subscribe(res => {
      this.recentProjects = res;
    });
  }

  viewProject(id:any){
    this.rout.navigate(['viewproject/'+id]);
  }

}
