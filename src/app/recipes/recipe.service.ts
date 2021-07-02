import {Recipe} from "./recipe.model";
import {Injectable,EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
  recipeSelected=new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe('A test Recipe',
      'This is a simply test',
      'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-768x1152.jpg',
   [new Ingredient('Meat',1),
        new Ingredient('french fries',20)
        ]),
    new Recipe('Another Recipe',
      'This is a simply test',
      'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-768x1152.jpg',
      [new Ingredient('burn',1),
        new Ingredient('water',20)
      ])

  ];
constructor(private shoppingListService:ShoppingListService) {
}
getRecipes(){
  return this.recipes.slice();
}
  getRecipe(index:number){
  return this.recipes.slice()[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
