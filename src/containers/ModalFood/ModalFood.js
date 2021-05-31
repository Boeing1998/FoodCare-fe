import React from "react";
import { Modal, Container, Row, Col, Button, Form } from "react-bootstrap";

import prepareIcon from "../../assests/prepare.svg"
import cookIcon from "../../assests/cooking.svg"
import favIcon from "../../assests/heart.svg"
import addCollectionIcon from "../../assests/addCollection.svg"
import addMenuIcon from "../../assests/addMenu.svg"

import IngredientCard from "../../components/IngredientCard/IngredientCard";

import styles from "./ModalFood.module.css";

const ModalFood = (props) => {
  const food = props.food;
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {food.food_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container className={styles.Container}>
          <Row>
            <Col xs={6} md={4}>
              <div class="image_padding cropped_image">
                <img
                  className={styles.Image}
                  src={`https://images.eatthismuch.com${food.images.main}`}
                  data-src={`https://images.eatthismuch.com${food.images.main}`}
                  data-action="zoom" />
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div>
                <img className={styles.Icon} src={prepareIcon} />
                {food.prep_time} mins to prepare
                </div>
              <div>
                <img className={styles.Icon} src={cookIcon} />
                {food.cook_time} mins to cook
              </div>
            </Col>
          </Row>
          <Row className={styles.IconContainer}>
            <Col xs={6} md={4}>
            </Col>
            <Col xs={6} md={4}>
            </Col>
            <Col xs={6} md={4}>
            </Col>
            <Col>
              <img className={`${styles.Icon} ${styles.Button}`} src={favIcon} />
              <img className={`${styles.Icon} ${styles.Button}`} src={addCollectionIcon} />
              <img className={`${styles.Icon} ${styles.Button}`} src={addMenuIcon} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className={styles.Detail}>
        <Row>
          <Col style={{ paddingTop: "5px", maxWidth: "150px" }}>
            <label>Recipe scaled to:</label>
          </Col>
          <Col >
            <Form.Control
              style={{ paddingTop: 0, maxWidth: "250px" }}
              as="select"
              className="filter-status"
              onChange={(e) => {

              }}
            >
              <option value="all">Amount to eat (1 serving)</option>
              <option value="recipe">Original recipe ({food.number_servings} servings)</option>
            </Form.Control>
          </Col>
        </Row>
        <Col xs={12} md={8}>
          {food.ingredients.map((ingredient, index) => (
            <IngredientCard ingredient={ingredient} index={index} />
          ))}

          <Row>
            <Col className="small_top_spacer">Directions are based on the original recipe of {food.number_servings} servings</Col>
          </Row>
          {food.directions.map((direction, index) => (
            <div className="col-12 direction_border_col">
              <div className="row">
                <div className={styles.Step}>Step {index + 1}</div>
                <div className="col-12 col-md-10">
                  {direction.text}
                </div>
              </div>
            </div>
          ))}
        </Col>
        <Col lg={true}>
          <div className={styles.CaloriesTitle}>Percen Calories From</div>

          <div className={styles.CaloriesTitle}>TOTAL</div>
          <Row className={styles.justify_content_center}>
            <div class="col-8 col-md-10">
              <div class="stats_output">
                <div class="row calories-row calories-col">
                  <div class="col-auto mr-auto">Calories</div>
                  <div class="col-auto">{Math.round(food.nutrions.calories)} g</div>
                </div>
                <div class="row carbs-col">
                  <div class="col-auto mr-auto pr-0">Carbs</div>
                  <div class="col-auto pl-0">{Math.round(food.nutrions.carbs)} g</div>
                </div>
                <div class="row fats-col">
                  <div class="col-auto mr-auto">Fat</div>
                  <div class="col-auto">{Math.round(food.nutrions.fats)} g</div>
                </div>
                <div class="row proteins-col">
                  <div class="col-auto mr-auto">Protein</div>
                  <div class="col-auto">{Math.round(food.nutrions.proteins)} g</div>
                </div>
                <div class="row nutrient-row small_top_spacer">
                  <div class="col-auto mr-auto">Fiber</div>
                  <div class="col-auto">{Math.round(food.nutrions.fiber)} g</div>
                </div>
                <div class="row nutrient-row">
                  <div class="col-auto mr-auto">Cholesterol</div>
                  <div class="col-auto">{Math.round(food.nutrions.cholesterol)} mg</div>
                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Modal.Footer>
    </Modal >
  );
};

export default ModalFood;