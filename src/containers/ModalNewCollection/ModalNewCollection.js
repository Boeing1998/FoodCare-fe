import React, { useState } from "react";
import { Modal, Container, Row, Col, Button, Form } from "react-bootstrap";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import CollectionService from "../../services/CollectionService"

const ModalNewCollection = (props) => {
  const [collection, setCollection] = useState({
    title: "",
    description: "",
    image: "https://images.eatthismuch.com/site_media/missing_thumbnail1.jpg"
  });

  const handleOnClick = () => {
    console.log("dsf");
    new CollectionService()
      .createCollection(collection)
      .then((response) => {
        if (response.status < 300) {
          NotificationManager.success(response.message);
        } else {
          NotificationManager.error(response.message);
        }
      });
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create New Collection
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row style={{ marginBottom: "20px" }}>
            <Col xs={6} md={4}>
              <label style={{ paddingTop: "6px" }}>Collection Title</label>
            </Col>
            <Col xs={12} md={8}>
              <input
                id="collection-title"
                maxlength="100"
                type="text"
                name="title"
                class="form-control"
                placeholder="Collection name"
                onChange={(e) => setCollection({ ...collection, title: e.target.value })} />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <label>Description</label>
            </Col>
            <Col xs={12} md={8}>
              <textarea
                id="collection-description"
                maxlength="1000"
                rows="8"
                type="text"
                name="description"
                class="form-control"
                placeholder="What kinds of foods/recipes are going in this collection?"
                onChange={(e) => setCollection({ ...collection, description: e.target.value })} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleOnClick}>Create</Button>
      </Modal.Footer>
      <NotificationContainer />
    </Modal>
  );
};

export default ModalNewCollection;