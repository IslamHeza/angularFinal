import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { ProjectService } from 'src/app/service/project.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css'],
})
export class LeftSectionComponent implements OnInit {
  constructor(
    private userService: UserService,
    private portfolioService: PortfolioService,
    private projectService: ProjectService,
    private rout :Router  ) {}

  readonly: boolean = true;
  cancel: boolean = false;
  user: User = new User();
  data: any;
  rate: number = 0;
  countOfPortfolio: any = 0;
  countOfProjects: any = 0;


  ngOnInit(): void {
    this.getUser(2);
    this.countPortfolio(2);
    this.countProject(2);
  }

  getUser(id: any) {
    return this.userService.getUser(id).subscribe((res) => {
      this.data = res;
      this.user = this.data;
      this.rate = this.user.rate;
    });
  }

  countPortfolio(id: any) {
    return this.portfolioService.countPortfolio(id).subscribe((res) => {
      this.countOfPortfolio = res;
    });
  }

  countProject(id: any) {
    return this.projectService.countProjects(id ,'done').subscribe((res) => {
      this.countOfProjects = res;
    });
  }

  viewProject(){
    this.rout.navigate(['listportfolio']);
  }
}
