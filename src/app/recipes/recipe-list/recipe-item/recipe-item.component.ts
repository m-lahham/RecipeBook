import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  recipeItem  :Recipe = new Recipe('','','');
  constructor() { }

  ngOnInit() {
  }

}
