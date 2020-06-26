import React, { Component } from "react";

class RecipeCard extends Component {
  onSelected(id) {
    console.log("selected", id);
  }

  render() {
    return (
      <div className="recipe-card">
        <h2>{this.props.title}</h2>
        <p>Prep time</p>
        <button onClick={() => this.props.onSelected(this.props)}>
          Select
        </button>
      </div>
    );
  }
}
export default RecipeCard;
