import React, { Component } from "react";
import RecipeCard from "./RecipeCard";

class Recipes extends Component {
  render() {
    return (
      <div>
        <h2>Recipe Library</h2>
        {this.props.recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            ingredients={recipe.ingredients}
            onSelected={this.props.onSelected}
          />
        ))}
      </div>
    );
  }
}

export default Recipes;
