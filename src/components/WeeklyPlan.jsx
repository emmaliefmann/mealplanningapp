import React, { Component } from "react";

import RecipeCard from "./RecipeCard";

class WeeklyPlan extends Component {
  render() {
    return (
      <div>
        <h2>Weekly plan</h2>
        {this.props.selected.map((selected) => (
          <RecipeCard />
        ))}
      </div>
    );
  }
}

export default WeeklyPlan;
