import React, { Component } from "react";

class ShoppingItem extends Component {
  getProps = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <div className="list-item">
          <li>{this.props.ingredient} </li>
          <span
            className="shopping-icon"
            onClick={() => this.props.onClicked(this.props)}
          >
            <i className="fas fa-shopping-cart"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default ShoppingItem;
