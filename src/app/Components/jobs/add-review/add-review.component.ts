import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/service/reviews.service';
import {Review} from 'src/app/_models/review';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  myGroup:any;
  Review = new Review();
  rate:any;

  changeRate(evant:any){
    this.rate = evant.value;
    this.Review.rate = this.rate;
    console.log(this.rate);
  }
  constructor(private ReviewService: ReviewsService , private router:Router , private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.Review.project_id = this.route.snapshot.params.project_id;
    this.Review.rater_id = 1;
    this.Review.ratee_id = this.route.snapshot.params.developer_id;

  }

  
  addReview(){
   return this.ReviewService.addReview(this.Review).subscribe(res => {
     console.log(this.Review.rate);
     this.router.navigate(['listproject']) ;
   })
  }

}
