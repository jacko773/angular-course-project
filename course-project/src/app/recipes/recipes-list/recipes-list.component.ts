import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.module';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("recipe","description","https://www.naturalnews.com/gallery/640/Food/Fancy-Food.jpg"),
    new Recipe("recipe","description","https://www.naturalnews.com/gallery/640/Food/Fancy-Food.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
