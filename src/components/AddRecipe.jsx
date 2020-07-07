import React from "react";
import { useForm } from "react-hook-form";

import IngredientField from "./IngredientField";

//add new

export default function AddRecipe(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const value = 4;
  return (
    <div>
      <h2>Add new Recipe</h2>
      <div className="align">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="recipe-input">
            <label htmlFor="title">Title</label>
            <input
              ref={register({ required: true })}
              type="text"
              className="ingredient-text-input"
              name="title"
            />
            <div className="error-message">
              {errors.title && <p>Please choose a title</p>}
            </div>
          </div>
          <div className="recipe-input">
            <label htmlFor="categories">Category:</label>
            <select
              htmlFor="categories"
              id="categories"
              name="category"
              ref={register({ required: true })}
            >
              <option value=""></option>
              {props.props.map(({ category }) => (
                <option key={category} value={category}>
                  {category}{" "}
                </option>
              ))}
            </select>
            <div className="error-message">
              {errors.category && <p>Please choose a category</p>}
            </div>
          </div>
          <div className="recipe-input">
            <label htmlFor="prep-time">Preparation time</label>
            <input
              ref={register({ required: true })}
              type="number"
              min="5"
              step="5"
              className="number-input"
              name="preptime"
            />
            <div className="error-message">
              {errors.preptime && <p>Please enter prep time</p>}
            </div>
          </div>
          <p>ingredients</p>
          {Array(value)
            .fill(0)
            .map((element) => (
              <IngredientField />
            ))}
          <div>
            <button>+</button>
            <button>-</button>
          </div>
          <textarea
            name="method"
            id=""
            className="add-recipe-method"
            defaultValue="method here"
            ref={register({ required: true })}
          ></textarea>
          <br />
          <input type="submit" value="Add Recipe" className="button" />
        </form>
      </div>
    </div>
  );
}
