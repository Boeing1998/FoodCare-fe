import React, { useState, useEffect } from "react";
import {Row} from 'react-bootstrap';

import styles from "./Homepage.module.css";

const Homepage = () => {
  console.log("asdasd");
  return (
    <>
      <div className={styles.Container}>
        <div>
          <div className={styles.TitleContainer}>
            <Row>
              <div class="col-12 text-center">
                <h1 class="display-5">
                  Put your diet on autopilot
                </h1>
              </div>
            </Row>
          </div>
        </div>

          <div className={styles.SelectorContainer}>
            <div className={styles.Selector}>
              <ul>
                
              </ul>
            </div>
          </div>

      </div>
    </>
  );
}

export default Homepage;