import React, { Component } from "react";

import RecipeCard from "./RecipeCard";

class WeeklyPlan extends Component {
  render() {
    return (
      <div>
        <h2>Weekly plan</h2>
        <div className="library-container">
          {this.props.plan.map((plan) => (
            <RecipeCard key={plan.id} title={plan.title} />
          ))}
        </div>
      </div>
    );
  }
}

export default WeeklyPlan;
