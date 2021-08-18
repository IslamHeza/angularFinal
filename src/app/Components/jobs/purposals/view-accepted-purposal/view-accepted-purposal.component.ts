import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/service/project.service';

import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/service/user.service';
import { PurposalService } from 'src/app/service/purposal.service';
import { Purposal } from 'src/app/_models/purposal';


@Component({
  selector: 'app-view-accepted-purposal',
  templateUrl: './view-accepted-purposal.component.html',
  styleUrls: ['./view-accepted-purposal.component.css']
})
export class ViewAcceptedPurposalComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private ProjectService: ProjectService,
    private router: Router,
    private userservice: UserService,
    private purposalservice: PurposalService,

  ) {}

  purposal :any=[];
  project: any = [];
  rate: number = 0;
  rate_pro: number = 0;
  data: any;
  user : any = [];
  ngOnInit(): void {

    this.get_purposal();


  }

  get_purposal(){

      this.purposalservice.getPurposal(this.route.snapshot.params.id).subscribe(response => {
        this.purposal=response;
        console.log(this.purposal.project_id);
        this.ProjectService.getProject(this.purposal.project_id).subscribe(res => {
          this.project=res;
          this.rate_pro = this.project.user_rate;
        });
        this.userservice.getUser(this.purposal.developer_id).subscribe(res => {
          this.user=res;
          this.rate = this.user.rate;
        });

      });
    }


// accept_purposal(){
//   this.ProjectService.getProject(this.route.snapshot.params.id).subscribe(res => {
//     this.project = res;
//     this.project.status='proccessing';
//     console.log(this.project.status);

//     this.ProjectService
//     .updateProject(this.route.snapshot.params.id, this.project)
//     .subscribe((res) => {

//     });


//   })

//   }
}
