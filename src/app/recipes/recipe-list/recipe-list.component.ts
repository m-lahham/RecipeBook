import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] =[
    new Recipe('Test Recipe', 'This is a test recipe','http://images.toucharger.com/img/graphiques/icones/alimentation/autre/fiche-recette.75574.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
