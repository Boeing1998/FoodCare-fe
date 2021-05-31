import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

import ModalFood from "../../containers/ModalFood/ModalFood";

import styles from "./CollectionCard.module.css";

const CollectionCard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const collection = props.collection;
  console.log(collection);
  return (
    <>
      {/* <ModalFood show={modalShow} onHide={() => setModalShow(false)} collection={collection} /> */}
      <Card style={{ width: '18rem' }} className={styles.Card} onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={collection.image} />
        <Card.Body>
          <Card.Title>{collection.title}</Card.Title>
          <Card.Text>
            {collection.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{collection.foods.length} items</Card.Footer>
      </Card>
    </>
  );
};

export default CollectionCard;