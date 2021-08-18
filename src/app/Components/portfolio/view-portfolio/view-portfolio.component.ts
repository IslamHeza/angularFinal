import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { Portfolio } from 'src/app/_models/Portfolio';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-portfolio',
  templateUrl: './view-portfolio.component.html',
  styleUrls: ['./view-portfolio.component.css']
})
export class ViewPortfolioComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private portfolioService: PortfolioService,
  ) {}

  freelancerName:string='John Do';

  portfolio:Portfolio = new Portfolio();
  data:any;
  user : any ;
  userId : any ;

  ngOnInit(): void {
    this.userId = localStorage.getItem('id');
    this.getUser(this.userId);

    this.portfolioService
      .getPortfolio(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.data = res;
        this.portfolio = this.data;
        console.log(this.portfolio);
      });
  }

  getUser(id: any) {
    return this.userService.getUser(id).subscribe((res) => {
      this.user = res;
    });
  }

}
