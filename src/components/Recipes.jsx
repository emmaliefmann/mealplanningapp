import React, { Component } from "react";
import RecipeCard from "./RecipeCard";

class Recipes extends Component {
  render() {
    return (
      <div className="full-container">
        <h2>Recipe Library</h2>
        <div className="library-container">
          {this.props.recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              id={recipe.id}
              ingredients={recipe.ingredients}
              onSelected={this.props.onSelected}
              plan={false}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Recipes;
