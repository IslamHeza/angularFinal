import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/_models/Portfolio';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-list-portfolio',
  templateUrl: './list-portfolio.component.html',
  styleUrls: ['./list-portfolio.component.css']
})

export class ListPortfolioComponent implements OnInit {

  constructor( private portfoilioService:PortfolioService) { }

  //data
  allPortfolios :any = [] ;
  freelancerName:string='John Do';

  ngOnInit(): void {
    this.getAllPortfolios();
  }

  //logic
  getAllPortfolios(){
    this.portfoilioService.getAllPortfolios().subscribe(res => {
      console.log(res);
      this.allPortfolios= res ;
    });
  }

  updatePortfolios(){

  }

  deletePortfolio(event:any , id:any){
    event.preventDefault()
    return this.portfoilioService.deletePortfolio(id).subscribe(res => {
    this.getAllPortfolios() ;
    });
  }




  }








