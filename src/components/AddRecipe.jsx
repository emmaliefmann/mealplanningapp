import React from "react";
import { useForm } from "react-hook-form";

//store categories as a const? map in order to push to array?
//ingredients' name should be objects in array
//https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx with autoincrement for index
export default function AddRecipe(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2>Add new Recipe</h2>
      <div className="align">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="ingredient-input">
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
          <div className="ingredient-input">
            <label htmlFor="categories">Category:</label>
            <select
              htmlFor="categories"
              id="categories"
              name="category"
              ref={register({ required: true })}
            >
              <option value=""></option>
              {props.props.map(({ category }) => (
                <option value={category}>{category} </option>
              ))}
            </select>
            <div className="error-message">
              {errors.category && <p>Please choose a category</p>}
            </div>
          </div>
          <div className="ingredient-input">
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
          <div className="ingredient-input">
            <input
              ref={register({ required: true })}
              type="number"
              min="0"
              className="number-input"
              name="ingredient1[0]"
            />
            <select
              name=""
              id=""
              ref={register({ required: true })}
              name="ingredient1[1]"
            >
              <option value="grams">Grams</option>
              <option value="tablespoons">tablespoons</option>
              <option value="teaspoons">teaspoons</option>
            </select>
            <input
              ref={register({ required: true })}
              type="text"
              className="ingredient-text-input"
              name="ingredient1[2]"
            />
          </div>
          <div className="ingredient-input">
            <input
              ref={register({ required: true })}
              type="number"
              min="0"
              className="number-input"
              name="ingredient2[0]"
            />
            <select
              name=""
              id=""
              ref={register({ required: true })}
              name="ingredient2[1]"
            >
              <option value="grams">Grams</option>
              <option value="tablespoons">tablespoons</option>
              <option value="teaspoons">teaspoons</option>
            </select>
            <input
              ref={register}
              type="text"
              className="ingredient-text-input"
              name="ingredient2[2]"
            />
          </div>
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
