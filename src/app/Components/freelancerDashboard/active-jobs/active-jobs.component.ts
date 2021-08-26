import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';
import { PurposalService } from 'src/app/service/purposal.service';
import { Project } from 'src/app/_models/project';
import { Purposal } from 'src/app/_models/purposal';
@Component({
  selector: 'app-active-jobs',
  templateUrl: './active-jobs.component.html',
  styleUrls: ['./active-jobs.component.css'],
})
export class ActiveJobsComponent implements OnInit {
  constructor(private projectService: ProjectService , private route:Router , private purposalservice:PurposalService, private router:ActivatedRoute) {}

  ActivProjects: any = [];
  data: any;
  userId : any ;
  empty : boolean = true ;


  ngOnInit(): void {
    this.userId = localStorage.getItem('id');
    this.getActiveProjects(this.userId);
    // this.getpurposal()
  }

  getActiveProjects(id: any) {
    this.projectService.getActiveProjects(id).subscribe((res) => {
      this.data = res;
      this.ActivProjects = this.data;
      if (this.ActivProjects.length != 0 ) this.empty= false ;

      this.getpurposal();
    
    });
  }

  // viewProject(id:any){
  //   this.route.navigate(['viewproject/'+id]);
  // }
project:any;
purposal:any;
  getpurposal() {
    
   return this.purposalservice.getPurposal(this.project.id).subscribe(res => {
        this.purposal=res;
        this.purposal.project_id=this.project.id
        console.log(this.purposal.id)
    this.route.navigate(['viewAcceptPurposal/'+this.purposal.id]);

      });
      
   

    }
}  
