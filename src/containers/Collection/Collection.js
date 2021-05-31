import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import Loading from "../../components/Loading/Loading";
import CollectionCard from "../../components/CollectionCard/CollectionCard";

import ModalNewCollection from  "../ModalNewCollection/ModalNewCollection"

import CollectionService from "../../services/CollectionService";

import styles from "./Collection.module.css";

const FoodBrowser = () => {
  const [loading, setLoading] = useState(false);
  const [collections, setCollections] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    new CollectionService()
      .getCollections()
      .then((response) => {
        if (response.status < 300) {
          setCollections(response.data);
          setLoading(false);
        } else {
        }
      })
      .catch((error) => { });
  }, []);

  return (
    <>
      <ModalNewCollection show={modalShow} onHide={() => setModalShow(false)} />
      <div className={styles.Container}>
        <div>
          <div className={styles.TitleContainer}>
            <div className={styles.Title}>
              <div className={styles.Col}>
                <div className={styles.SectionHeader}>Collection</div>
              </div>
            </div>
          </div>

          <div className={styles.BodyContainer}>
            <div className={styles.Row3}>
              <div className={styles.Col12}>
                <div className="btn btn-outline-primary create_recipe" onClick={() => setModalShow(true)}>
                  <i className="fa fa-plus-square-o"></i> Create new Collection
                </div>
              </div>
            </div>

            <div className={styles.Row}>
              <div className={styles.ResultContainer}>
                <hr className="WhiteBar" />
                <div className={styles.FoodContainer}>
                  {collections.length !== 0 ?
                    collections.map((collection, index) => (
                      <CollectionCard collection={collection} index={index} />
                    ))
                    : <div>No food was found</div>}
                </div>
                <Loading className={styles.Loading} loading={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodBrowser;
