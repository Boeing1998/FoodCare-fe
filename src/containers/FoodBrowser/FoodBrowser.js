import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import Loading from "../../components/Loading/Loading";
import FoodCard from "../../components/FoodCard/FoodCard";

import FoodService from "../../services/FoodService";

import styles from "./FoodBrowser.module.css";

const FoodBrowser = () => {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    type: "recipe",
    page: 0,
    limit: 20,
  });
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setLoading(true);
    new FoodService()
      .getFoods(filter)
      .then((response) => {
        if (response.status < 300) {
          setFoods([...foods, ...response.data]);
          setLoading(false);
        } else {
        }
      })
      .catch((error) => { });
  }, [filter]);

  const loadMore = () => {
    const newFilter = {...filter};
    newFilter.page++;
    setFilter(newFilter);
  }

  return (
    <>
      <div className={styles.Container}>
        <div>
          <div className={styles.TitleContainer}>
            <div className={styles.Title}>
              <div className={styles.Col}>
                <div className={styles.SectionHeader}>Food Browser</div>
              </div>
            </div>
          </div>

          <div className={styles.BodyContainer}>
            <div className={styles.Row3}>
              <div className={styles.Col12}>
                <div className="btn btn-outline-primary create_recipe">
                  <i className="fa fa-plus-square-o"></i> Create new Custom Recipe
                </div>
                <div className="btn btn-outline-primary create_custom_food">
                  <i className="fa fa-plus-square-o"></i> Create new Custom Food
                </div>
              </div>
            </div>

            <div className={styles.Row}>
              <div className={styles.SearchContainer}>
                <form>
                  <div className={styles.Row}>
                    <div className={styles.Col}>
                      <input
                        autocomplete="off"
                        className={styles.SearchBar}
                        placeholder="Search..."
                        type="text"
                      />
                    </div>
                  </div>
                </form>

                <div className={styles.SelectionContainer}>
                  <div className={styles.FoodFilter}>
                    Food Type
                    <Form.Control
                      as="select"
                      className="filter-status"
                      onChange={(e) => {
                        setFilter({ ...filter, type: e.target.value });
                      }}
                    >
                      <option value="all">All</option>
                      <option value="recipe">Recipes</option>
                      <option value="basicFood">Basic Foods</option>
                      <option value="blocked">Custom Foods</option>
                    </Form.Control>
                  </div>
                </div>
              </div>
              <div className={styles.ResultContainer}>
                <hr className="WhiteBar" />
                <div className={styles.FoodContainer}>
                  {/* {foods.map((food, index) => (
                    <FoodCard food={food} index={index} />
                  ))} */}
                  {foods.length !== 0 ?
                    foods.map((food, index) => (
                      <FoodCard food={food} index={index} />
                    ))
                    // < FoodCard food={foods[1]} />
                    : <div>No food was found</div>}
                </div>
                <Loading className={styles.Loading} loading={loading} />
                <Button variant="outline-primary" className={styles.Button} onClick={() => loadMore()}>More results</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodBrowser;
