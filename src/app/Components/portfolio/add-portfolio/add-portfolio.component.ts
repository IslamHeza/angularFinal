import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { UserService } from 'src/app/service/user.service';
import { Portfolio } from 'src/app/_models/Portfolio';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.css']
})
export class AddPortfolioComponent implements OnInit {

  constructor(private portfolioService:PortfolioService ,private userService:UserService, private router:Router) { }
  title:string = "hello" ;
  skills: string[] = [];
  multiple:boolean = true ;
  ngOnInit(): void {
  this.newPortfolio.user_id=1;

  }
  newPortfolio: Portfolio = new Portfolio() ;
  
  addPortfolio(){
    this.portfolioService.addPortfolio(this.newPortfolio).subscribe(res=>{
      console.log(res);
      this.router.navigate(['listportfolio']) ;
    })

  }


}
