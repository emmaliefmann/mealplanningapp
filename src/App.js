import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//import Recipes from "./components/Recipes";
import Pagination from "./components/Pagination";
import RecipeCard from "./components/RecipeCard";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import WeeklyPlan from "./components/WeeklyPlan";
import ShoppíngList from "./components/ShoppingList";
import AddRecipe from "./components/AddRecipe";
import NotFound from "./components/NotFound";

//for pagination algorithm
import { paginate } from "./utils/paginate";

class App extends Component {
  state = {
    profile: { username: "Emma Liefmann", photo: "https://picsum.photos/100" },
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
        category: "other",
      },
      {
        id: 6,
        title: "Recipe6",
        ingredients: [
          { value: 300, unit: "grams", ingredient: "potato" },
          { value: 50, unit: "grams", ingredient: "cream" },
        ],
        category: "vegetarian",
      },
    ],
    plan: [],
    ingredients: [],
    ingredientNumber: 5,
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
  };

  render() {
    const recipes = paginate(
      this.state.recipes,
      this.state.currentPage,
      this.state.pageSize
    );

    const { username, photo } = this.state.profile;
    return (
      <div className="App">
        <Title />
        <div className="new-container">
          <main className="page">
            <Switch>
              <Route
                path="/addrecipe"
                render={(props) => (
                  <AddRecipe
                    recipes={this.state.recipes}
                    ingredientNumber={5}
                    categories={this.state.recipes.category}
                    {...props}
                  />
                )}
              />
              <Route
                path="/weeklyPlan"
                render={(props) => (
                  <WeeklyPlan plan={this.state.plan} {...props} />
                )}
              />
              <Route
                path="/shoppinglist"
                render={(props) => (
                  <ShoppíngList
                    ingredients={this.state.ingredients}
                    onClicked={this.handleClicked}
                    {...props}
                  />
                )}
              />
              <Route path="/library" component=""></Route>
              <Route path="/not-found" component={NotFound}></Route>
              <Redirect from="/" exact to="/library"></Redirect>
              <Redirect to="/not-found"></Redirect>
            </Switch>
          </main>
          <Navbar username={username} photo={photo} />
        </div>
      </div>
    );
  }
}

export default App;
