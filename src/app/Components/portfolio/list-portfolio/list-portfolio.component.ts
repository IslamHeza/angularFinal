import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/_models/Portfolio';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-portfolio',
  templateUrl: './list-portfolio.component.html',
  styleUrls: ['./list-portfolio.component.css'],
})
export class ListPortfolioComponent implements OnInit {
  constructor(
    private userService: UserService,
    private portfoilioService: PortfolioService
  ) {}

  //data
  allPortfolios: any = [];
  freelancerName: string = 'John Do';
  data: any;
  userid : any ;

  ngOnInit(): void {
    this.userid = localStorage.getItem('id');
    this.getAllPortfolio(this.userid);
    this.getUser(this.userid) ;
  }

  //logic
  getAllPortfolio(id:any) {
    this.portfoilioService.getAllPortfolio(id).subscribe((res) => {
      console.log(res);
      this.allPortfolios = res;
    });
  }

  updatePortfolios() {}

  deletePortfolio(event: any, id: any) {
    event.preventDefault();
    return this.portfoilioService.deletePortfolio(id).subscribe((res) => {
      this.getAllPortfolio(this.userid);
    });
  }

  getUser(id: any) {
    return this.userService.getUser(id).subscribe((res) => {
      this.data = res;
    });
  }


}
