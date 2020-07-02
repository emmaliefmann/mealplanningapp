import React, { Component } from "react";
import ShoppingItem from "./ShoppingItem";

class ShoppíngList extends Component {
  render() {
    return (
      <div>
        <h2>Shopping List</h2>
        <div>
          <ul>
            {this.props.ingredients.map((ingredient) => (
              <ShoppingItem
                ingredient={ingredient.ingredient}
                unit={ingredient.unit}
                value={ingredient.value}
                onClicked={this.props.onClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppíngList;
