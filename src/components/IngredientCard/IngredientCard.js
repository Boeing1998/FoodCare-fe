import React from "react";

import "./IngredientCard.css"

const IngredientCard = (props) => {
  const food = props.ingredient;
  return (
    <>
      <div className="diet_draggable">
        <div className="food_box ingredient_box col-12 read-only-ingredient">
          <div className="row food_object_row align-items-center no-wrap">
            <div className="food_image_column">
              <img className="food_image" src={`https://images.eatthismuch.com${food.image}`}>
              </img>
            </div>
            <div className="food_details_column">
              <div className="food_name_column">
                <div className="row">
                  <div className="food_name col-12">
                    <div className="print_name">{food.food_name}</div>
                    <div className="print_desc food_description"></div>
                  </div>
                </div>
              </div>

              <div className="food_amount_column">
                <div className="row">
                  <div className="food_units col-12">
                    {food.amount * food.units.amount} {food.units.description}
                  </div>
                  <div className="gram_printout col-12">{food.amount * food.units.grams} grams</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="ThinWhiteBar" />
    </>
  );
};

export default IngredientCard;
