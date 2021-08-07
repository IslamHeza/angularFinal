import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/project.service';
import { Project } from 'src/app/_models/project';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  constructor(private projectService :ProjectService) { }

  recentProjects :Project = new Project() ;
  data : any;

  ngOnInit(): void {
  }

  getRecentProject(){
    this.projectService.getRecentProject().subscribe((res) => {
      console.log(res);
      this.data = res;
      this.recentProjects = this.data;
    });
  }

}
