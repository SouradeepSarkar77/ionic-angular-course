import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Partial<Recipe> = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('recipeId')) {
        //redirect
        console.error("Recipe ID is not provided in the route");
        return;
      }
      const recipeId = paraMap.get('recipeId');
      if(recipeId) {
        this.loadedRecipe = this.recipesService.getRecipe(recipeId) || {};
        console.log("Recipe : ",this.loadedRecipe);
      }
    });
  }

}
