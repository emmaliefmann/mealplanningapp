import React, { Component } from "react";

import RecipeCard from "./RecipeCard";
import Pagination from "./Pagination";

class Recipes extends Component {
  handlePageChange = (page) => {
    this.props.currentPage = page;
    console.log(this.props.currentPage);
  };

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
            />
          ))}
        </div>
        <Pagination
          count={this.props.recipes.length}
          pageSize={2}
          onPageChange={this.handlePageChange}
          currentPage={1}
        />
      </div>
    );
  }
}

export default Recipes;
