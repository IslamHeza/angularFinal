import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/project.service';
import { Project } from 'src/app/_models/project';

@Component({
  selector: 'app-active-jobs',
  templateUrl: './active-jobs.component.html',
  styleUrls: ['./active-jobs.component.css'],
})
export class ActiveJobsComponent implements OnInit {
  constructor(private projectService: ProjectService) {}

  ActivProjects: any = [];
  data: any;
  ngOnInit(): void {
    this.getActiveProjects(1);
  }

  getActiveProjects(id: any) {
    this.projectService.getActiveProjects(id).subscribe((res) => {
      console.log(res);
      this.data = res;
      this.ActivProjects = this.data;
    });
  }
}
