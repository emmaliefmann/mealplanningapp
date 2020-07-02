import React, { Component } from "react";
// when just react, when component??

import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import WeeklyPlan from "./components/WeeklyPlan";
import ShoppíngList from "./components/ShoppingList";

class App extends Component {
  state = {
    //profile object, default avatar pic if no photo chosen
    username: "Emma Liefmann",
    recipes: [
      {
        id: 1,
        title: "Recipe1",
        ingredients: [
          { value: 100, unit: "grams", ingredient: "apples" },
          { value: 400, unit: "grams", ingredient: "pasta" },
        ],
        selected: false,
      },
      {
        id: 2,
        title: "Recipe2",
        ingredients: [
          { value: 90, unit: "grams", ingredient: "courgette" },
          { value: 5, unit: "grams", ingredient: "carrots" },
        ],
        selected: false,
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
        selected: false,
      },
      {
        id: 4,
        title: "Recipe4",
        ingredients: [{ value: 100, unit: "grams", ingredient: "apples" }],
        selected: false,
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

  render() {
    return (
      <div className="App">
        <Title />
        <main>
          <div className="page">
            <Recipes
              recipes={this.state.recipes}
              plan={false}
              onSelected={this.handleSelected}
            />
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
