import React, { Component } from "react";
// when just react, when component??

import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

class App extends Component {
  state = {
    //profile object, default avatar pic if no photo chosen
    username: "Emma Liefmann",
    recipes: [
      {
        id: 1,
        title: "Recipe1",
        ingredients: ["potatoes", "milk", "bread", "cheese"],
      },
      {
        id: 2,
        title: "Recipe2",
        ingredients: ["chocolate", "orange", "cheese"],
      },
      {
        id: 3,
        title: "Recipe3",
        ingredients: ["carrots", "beef", "cauliflower", "cheese"],
      },
      {
        id: 4,
        title: "Recipe4",
        ingredients: ["onions", "milk", "flour", "salt"],
      },
    ],
  };

  handleSelected = (recipe) => {
    console.log("handled", recipe);
  };

  render() {
    return (
      <div className="App">
        <Title />
        <main>
          <Navbar username={this.state.username} />
          <Recipes
            recipes={this.state.recipes}
            onSelected={this.handleSelected}
          />
        </main>
      </div>
    );
  }
}

export default App;
