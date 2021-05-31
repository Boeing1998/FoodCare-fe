import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

import ModalFood from "../../containers/ModalFood/ModalFood";

import styles from "./FoodCard.module.css";

const FoodCard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const food = props.food;
  return (
    <>
      <ModalFood show={modalShow} onHide={() => setModalShow(false)} food={food} />
      <Card style={{ width: '18rem' }} className={styles.Card} onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={`https://images.eatthismuch.com${food.images.main}`} />
        <Card.Body>
          <Card.Title>{food.food_name}</Card.Title>
          <Card.Text>
            {Math.round(food.nutrions.calories / food.number_servings)} calories per serving
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{food.cook_time} mins cook time</Card.Footer>
      </Card>
    </>
  );
};

export default FoodCard;