import React from "react";
import Header from "../../components/Header/Header";
import styles from "./login.module.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Routes, Route, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const login = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    createUser();
  };

  const createUser = async () => {
    try {
      const response = await axios.post(
        `https://autumn-delicate-wilderness.glitch.me/v1/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      console.log("response", response);
      Cookies.set("Token", response.data.token);
      if (response.status === 200) {
        toast("You have successfully logged in");
        setTimeout(() => {
          navigate("/Main"); // Navigate after a 3-second delay
        }, 3000); // 3000 milliseconds (3 seconds)
      }
      
    } catch (err) {
      console.log(err);
      toast("Email or password is bad try again")
    }
  };

  return (
    <>
      <Header />
      <div>
        <div className={styles.section1}>
          <h3 className={styles.registerHeader}>Log In</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}

            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={6}
            />
            <input type="submit" className={styles.button} value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
