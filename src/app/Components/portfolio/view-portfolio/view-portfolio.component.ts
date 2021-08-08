import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { Portfolio } from 'src/app/_models/Portfolio';

@Component({
  selector: 'app-view-portfolio',
  templateUrl: './view-portfolio.component.html',
  styleUrls: ['./view-portfolio.component.css']
})
export class ViewPortfolioComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService,
    private router: Router
  ) {}

  freelancerName:string='John Do';

  portfolio:Portfolio = new Portfolio();
  data:any;

  ngOnInit(): void {
    this.portfolioService
      .getPortfolio(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.data = res;
        this.portfolio = this.data;
      });
  }
}
