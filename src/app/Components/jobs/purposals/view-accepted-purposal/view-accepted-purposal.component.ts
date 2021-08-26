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
  // status:any;
  data: any;
  user : any = [];
  status: any;
  reciever_id :any;
  onlineUser: User = new User();
  userData :any;

  ngOnInit(): void {

    this.get_purposal();


  }

  get_purposal(){

      this.purposalservice.getPurposal(this.route.snapshot.params.id).subscribe( response => {
        this.purposal=response;

        
      this.onlineUser.id = localStorage.getItem('id');
        if(this.onlineUser.id == this.purposal.owner_id){
          this.reciever_id = this.purposal.developer_id
        } else{
          this.reciever_id = this.purposal.owner_id;
        }

        console.log(this.purposal.developer_id);
        // this.ProjectService.getProject(this.purposal.project_id).subscribe(res => {
        //   this.project=res;
        //   this.rate_pro = this.project.rate;
        //   // this.status=this.project.status

        //   console.log(res);
        //   console.log(this.project.status);
        // });
        this.userservice.getUser(this.purposal.developer_id).subscribe(res => {
          this.user=res;
          this.rate = this.user.rate

          console.log(res);
          this.ProjectService.getProject(this.purposal.project_id).subscribe(res => {
            this.project=res;
            this.rate_pro = this.project.rate;
            this.project.developer_id=this.purposal.developer_id
            this.ProjectService.updateProject(this.purposal.project_id, this.project)
            .subscribe((res) => {

            });
          });

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
