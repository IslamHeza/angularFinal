import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private ProjectService:ProjectService,
    private router: Router
    ){ }

    project:Project  = new Project ();
     data: any;

  ngOnInit(): void {
    this.ProjectService
    .getProject(this.route.snapshot.params.id)
    .subscribe((res) => {
      this.data = res;
      this.project = this.data;
    });
  }
  updateProject() {
    this.ProjectService
      .updateProject(this.route.snapshot.params.id, this.project)
      .subscribe((res) => {
        return this.router.navigate(['listproject']);
      });
  }

}
