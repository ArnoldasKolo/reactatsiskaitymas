import React from 'react'
import Header from "../../components/Header/Header"
import styles from "./register.module.css"
import { useState } from 'react'
import axios from 'axios'
import {Routes, Route, useNavigate} from 'react-router-dom';
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
    try{
      const response = await axios.post(`https://autumn-delicate-wilderness.glitch.me/v1/auth/register`, {
      email: email,
      password: password,
    });
    console.log("response", response);
    if (response.status === 200) {
      toast("You have successfully created an account");
      setTimeout(() => {
        navigate("/Login");
      }, 3000); 
    }
   
    }catch(err){
      console.log(err)
      toast("Something went wrong try again")
    
  }}

  return (
    <>
      <Header/>
      <div>
          <div className={styles.section1}>
            <h3 className={styles.registerHeader}>Register</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
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
  )
}

export default login