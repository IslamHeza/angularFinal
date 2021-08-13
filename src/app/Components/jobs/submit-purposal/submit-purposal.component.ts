import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Project } from 'src/app/_models/project';
import { Purposal } from 'src/app/_models/purposal';
import { ProjectService } from 'src/app/service/project.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-submit-purposal',
  templateUrl: './submit-purposal.component.html',
  styleUrls: ['./submit-purposal.component.css']
})
export class SubmitPurposalComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private ProjectService: ProjectService,
    private router: Router,
    private userservice: UserService,
  ) {}
  purposal = new Purposal();
   project:any=[];
   rate: number = 0;
  // project:any = new Project()

  ngOnInit(): void {
    this.view();
  }

  view(){
    this.ProjectService.getProject(this.route.snapshot.params.id).subscribe(res => {
        this.project = res;
        this.rate = this.project.rate;
        console.log(this.project);

      });

  }
}
