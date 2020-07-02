import React, { Component } from "react";

class ShoppíngList extends Component {
  //   getIngredients() {
  //     //     const length = this.props.plan.length -1;
  //     //     //console.log("length:", length);
  //     //     //need to loop through the plan objects in the array
  //     //     //for each object add the ingredients to the list
  //     //     const ingredients = this.props.plan.ingredients;
  //     //     console.log(this.props.plan[0].ingredients);
  //     let items = this.props.plan.map((item) => {
  //       item.ingredients;
  //     });
  //     console.log(items);
  //   }

  render() {
    return (
      <div>
        <h2>Shopping List</h2>
        <div>
          <ul>
            {this.props.ingredients.map((list) => (
              <div
                className="list-item"
                onclick={() => this.onPurchased(this.props)}
              >
                <li>{list}</li>
                <span className="shopping-icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppíngList;
