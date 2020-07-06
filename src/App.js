import React, { Component } from "react";
// when just react, when component??

//import Recipes from "./components/Recipes";
import Pagination from "./components/Pagination";
import RecipeCard from "./components/RecipeCard";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import WeeklyPlan from "./components/WeeklyPlan";
import ShoppíngList from "./components/ShoppingList";
import AddRecipe from "./components/AddRecipe";

//for pagination algorithm
import { paginate } from "./utils/paginate";

class App extends Component {
  state = {
    //profile object, default avatar pic if no photo chosen
    username: "Emma Liefmann",
    currentPage: 1,
    pageSize: 2,
    recipes: [
      {
        id: 1,
        title: "Recipe1",
        ingredients: [
          { value: 100, unit: "grams", ingredient: "apples" },
          { value: 400, unit: "grams", ingredient: "pasta" },
        ],
        category: "main dish",
      },
      {
        id: 2,
        title: "Recipe2",
        ingredients: [
          { value: 90, unit: "grams", ingredient: "courgette" },
          { value: 5, unit: "grams", ingredient: "carrots" },
        ],
        category: "side dish",
      },
      {
        id: 3,
        title: "Recipe3",
        ingredients: [
          { value: 100, unit: "grams", ingredient: "aubergine" },
          { value: 400, unit: "grams", ingredient: "pasta" },
          { value: 50, unit: "grams", ingredient: "rice" },
          { value: 90, unit: "grams", ingredient: "onions" },
          { value: 5, unit: "grams", ingredient: "turnip" },
        ],
        category: "desert",
      },
      {
        id: 4,
        title: "Recipe4",
        ingredients: [{ value: 100, unit: "grams", ingredient: "apples" }],
        category: "baking",
      },
      {
        id: 5,
        title: "Recipe5",
        ingredients: [
          { value: 290, unit: "tablespoons", ingredient: "courgette" },
          { value: 53, unit: "grams", ingredient: "caramel" },
        ],
        category: "side dish",
      },
      {
        id: 6,
        title: "Recipe6",
        ingredients: [
          { value: 300, unit: "grams", ingredient: "potato" },
          { value: 50, unit: "grams", ingredient: "cream" },
        ],
        category: "side dish",
      },
    ],
    plan: [],
    ingredients: [],
  };

  handleSelected = (recipe) => {
    const list = this.state.ingredients.concat(recipe.ingredients);
    this.setState({ ingredients: list });
    const oldPlan = this.state.plan;
    const plan = oldPlan.concat(recipe);
    this.setState({ plan: plan });
  };

  handleClicked = (item) => {
    console.log(item);
    //change class to change color,
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    console.log(this.state.currentPage);
  };

  //<AddRecipe props={this.state.recipes} />
  render() {
    const { recipes: allRecipes } = this.state;
    const recipes = paginate(
      this.state.recipes,
      this.state.currentPage,
      this.state.pageSize
    );
    console.log(recipes);

    return (
      <div className="App">
        <Title />
        <main>
          <div className="page">
            <div className="full-container">
              <h2>Recipe Library</h2>
              <div className="library-container">
                {recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    id={recipe.id}
                    ingredients={recipe.ingredients}
                  />
                ))}
              </div>
              <Pagination
                count={this.state.recipes.length}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
                currentPage={this.state.currentPage}
              />
            </div>
            <WeeklyPlan
              //for adding to array, issue with key duplicates
              plan={this.state.plan}
            />
            <ShoppíngList
              ingredients={this.state.ingredients}
              onClicked={this.handleClicked}
            />
          </div>
          <Navbar username={this.state.username} />
        </main>
      </div>
    );
  }
}

export default App;
