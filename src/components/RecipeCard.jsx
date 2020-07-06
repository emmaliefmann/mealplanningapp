import React, { Component } from "react";

class RecipeCard extends Component {
  getCardClasses = () => {
    let classes = "";
    classes += this.props.selected === true ? "recipe-selected" : "recipe-card";
    //doesn't work... not re-rendered
    return classes;
  };

  render() {
    console.log(this.props);
    return (
      <div className={this.getCardClasses()}>
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
