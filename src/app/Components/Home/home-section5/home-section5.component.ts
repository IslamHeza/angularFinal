import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-home-section5',
  templateUrl: './home-section5.component.html',
  styleUrls: ['./home-section5.component.css']
})
export class HomeSection5Component implements OnInit {

  Projects: any = [];
  constructor(private ProjectsService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }
  getProjects() {
    this.ProjectsService.getProjects().subscribe(res => {
      this.Projects = res;

    });

  }
}
