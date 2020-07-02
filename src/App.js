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
        ingredients: ["potatoes", "milk", "bread", "cheese"],
        selected: false,
      },
      {
        id: 2,
        title: "Recipe2",
        ingredients: ["chocolate", "orange", "cheese"],
        selected: false,
      },
      {
        id: 3,
        title: "Recipe3",
        ingredients: ["carrots", "beef", "cauliflower", "cheese"],
        selected: false,
      },
      {
        id: 4,
        title: "Recipe4",
        ingredients: ["onions", "milk", "flour", "salt"],
        selected: false,
      },
    ],
    plan: [],
    ingredients: [],
  };

  handleSelected = (recipe) => {
    const list = this.state.ingredients.concat(recipe.ingredients);
    console.log(list);
    this.setState({ ingredients: list });
    const oldPlan = this.state.plan;
    const plan = oldPlan.concat(recipe);
    this.setState({ plan: plan });
  };

  handlePurchased = (props) => {
    console.log(props);
  };
  // handleSelected = (recipe) => {
  //   const selectedId = recipe.id;
  //   const recipes = this.state.recipes;
  //   const filter = this.state.recipes.filter((r) => r.id === selectedId);
  //   const selected = filter[0];

  //   selected.selected = true;

  //   const index = recipes.indexOf(selected);
  //   this.setState((recipes[index]: selected));
  //   console.log(this.state.plan);
  //   //props of selected updates successfully, needs to be stored somehow
  // };

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
              //plan={this.state.recipes.filter((r) => r.selected === true)}
              //for adding to array, issue with key duplicates
              plan={this.state.plan}
            />
            <ShoppíngList
              //when items added, child element is array, not individual
              ingredients={this.state.ingredients}
              onPurchased={this.handlePurchased}
            />
          </div>
          <Navbar username={this.state.username} />
        </main>
      </div>
    );
  }
}

export default App;
