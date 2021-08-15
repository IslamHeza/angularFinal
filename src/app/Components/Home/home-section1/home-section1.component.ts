import { Component, OnInit } from '@angular/core';
import { CatagoriesService } from 'src/app/service/catagories.service';

@Component({
  selector: 'app-home-section1',
  templateUrl: './home-section1.component.html',
  styleUrls: ['./home-section1.component.css']
})
export class HomeSection1Component implements OnInit {
  searchName:String="";
  Categories:any = [];
  category_id :any;
  changeRate(evant:any){
    this.category_id = evant.value;
    this.Categories.id = this.category_id;
    console.log(this.category_id);
  }
  constructor(private CategoryServeice : CatagoriesService) { }

  btnStyle(clickedBtn:any , unclickedBtn:any){
    console.log(clickedBtn);
    console.log(unclickedBtn);
    clickedBtn.classList.add("btnClikcedStyle");
    unclickedBtn.classList.remove("btnClikcedStyle");
  }
  getCategories() {
    this.CategoryServeice.getAllCatagories().subscribe((res: any) => {
      this.Categories = res;
      console.log(res);
    })
  }
  ngOnInit(): void {
    this.getCategories();
  }

}
