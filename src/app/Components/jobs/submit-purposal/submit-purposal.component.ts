import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Project } from 'src/app/_models/project';
import { Purposal } from 'src/app/_models/purposal';
import { ProjectService } from 'src/app/service/project.service';
import { PurposalService } from 'src/app/service/purposal.service';
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
    private PurposalService: PurposalService,
  ) {}
  purposal = new Purposal();
   project:any=[];
   rate: number = 0;
  // project:any = new Project()
  //  user = new User();
   data: any;

  ngOnInit(): void {
    this.view();

    this.purposal.developer_id=1;
    this.purposal.owner_id=1;

  }

  view(){
    this.ProjectService.getProject(this.route.snapshot.params.id).subscribe(res => {
        this.project = res;
        this.rate = this.project.rate;
        console.log(this.project);

      });

  }


   addingpurposal(){
     this.view();
     return this.PurposalService.addPurposal(this.purposal).subscribe(res=>{
       console.log(this.purposal.project_id);
      //  this.router.navigate(['viewproject/:id']) ;

     })
   }



}
