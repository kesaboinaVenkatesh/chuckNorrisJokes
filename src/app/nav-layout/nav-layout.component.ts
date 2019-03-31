import { Component, OnInit } from '@angular/core';
import {SharedServicesService} from '../shared-services.service';

@Component({
  selector: 'app-nav-layout',
  templateUrl: './nav-layout.component.html',
  styleUrls: ['./nav-layout.component.css']
})
export class NavLayoutComponent implements OnInit{
categories: string[];
categoriesUrl: string;
categorySpecificJokes: any;  
inProgress: boolean;
  constructor( private sharedServices:SharedServicesService) {
    this.categoriesUrl='/api/categories'
  }

  ngOnInit() {
	  this.getCategories();
  }
 
  getCategories() {
      this.sharedServices.getCategoryNames(this.categoriesUrl).subscribe(
          (data: string[]) => { 
            this.categories = data;
            this.getCategorySpecificJokes(data[0]);
          },
         err => console.error(err),
         () => console.log('done loading Categories')
        );
      }
  getCategorySpecificJokes(category) {
    let specificUrl = this.categoriesUrl+"/"+category;
    this.inProgress = true;
      this.sharedServices.getCategoryNames(specificUrl).subscribe(
        data => { 
          this.inProgress = false;
          this.categorySpecificJokes = data
        },
        err => {
          console.error(err);
          this.inProgress = true;
        },
        () => console.log('done loading Categories')
        );
    }
}
