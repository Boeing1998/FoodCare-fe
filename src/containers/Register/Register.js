import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import {
  emailRegex,
  passwordRegex,
  formValid,
  userConstants,
} from "../../constants/formValidation";

import AuthService from "../../services/AuthService";

import styles from "./Register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...error };

    if (name === "email") {
      formErrors.email = emailRegex.test(value) ? "" : "invalid email address";
      setEmail(value);
    } else {
      formErrors.password = passwordRegex.test(value)
        ? ""
        : "password must has atleast 6 characters including upcase, digit, and special character";
      setPassword(value);
    }
    setError(formErrors);
  };

  const handleOnClick = () => {
    if (error.email === "" && error.password === "") {
      new AuthService().register(email, password).then((response) => {
        if (response.status < 300) {
          NotificationManager.success(response.message);
        } else {
          NotificationManager.error(response.message);
        }
      });
    }
  };

  return (
    <>
      <NotificationContainer />
      <div className={styles.Login}>
        <div className={styles.LoginLeft}></div>
        <div className={styles.LoginRight}>
          <div className={styles.LoginRightHeader}>
            <p>Already have an account?</p>
            <Button
              variant="outline-dark"
              onClick={() => history.push("/login")}
            >
              Sign In
            </Button>
          </div>
          <div className={styles.LoginRightTitle}>
            <h3>Get Start absolutely free</h3>
            <p>Free forever. No credit card needed.</p>
          </div>
          <div className={styles.LoginRightForm}>
            <form className={styles.LoginForm}>
              <div className={styles.LoginField}>
                <label for="email">email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="juile@gmail.com"
                  id="email"
                  autocomplete="off"
                  value={email}
                  onChange={handleChange}
                />
                <p>{error.email}</p>
              </div>
              <div className={styles.LoginField}>
                <label for="password">password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="6+ character"
                  id="password"
                  autocomplete="off"
                  value={password}
                  onChange={handleChange}
                />
                <p>{error.password}</p>
              </div>
              <p class="login__error"></p>
              <Button
                className={styles.LoginSubmit}
                onClick={() => handleOnClick()}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
