import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCategories().subscribe(response => {
      this.categories = response;
    });
  }
}
