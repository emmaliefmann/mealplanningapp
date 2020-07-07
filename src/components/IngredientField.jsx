import React from "react";
import { useForm } from "react-hook-form";

//name needs to change dynamically depending on index
//how to join variable with string e.g. {title}+[0]?

const IngredientField = (props) => {
  const index = props.index;
  const ingredient = "ingredient";
  const test = ingredient + index;
  const { title } = { title: test };
  const { register, errors } = useForm();

  return (
    <div className="ingredient-input">
      <input
        ref={register({ required: true })}
        type="number"
        min="0"
        className="number-input"
        name={{ title }}
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
        <option value="ml">ml</option>
      </select>
      <input
        ref={register({ required: true })}
        type="text"
        className="ingredient-text-input"
        name="ingredient1[2]"
      />
    </div>
  );
};

export default IngredientField;
