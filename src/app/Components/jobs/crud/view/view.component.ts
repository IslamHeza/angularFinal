import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,private ProjectService: ProjectService) {}

   data:any=[];
   project: Project= new  Project();

  ngOnInit(): void {
    this.ProjectService.getProject(this.route.snapshot.params.id).subscribe(res => {
      this.data = res;
      this. project=  this.data;
      console.log(this.project);
    });
}
  }


