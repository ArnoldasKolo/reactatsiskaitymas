import React from "react";
import Header from "../../components/Header/Header";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const addProduct = () => {
  const [shopName, setShopName] = useState("");
  const [town, setTown] = useState("");
  const [startYear, setStartYear] = useState("");
  const [description, setDescription] = useState("");

  const createProduct = async () => {
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          shopName: shopName,
          town: town,
          startYear: startYear,
          description: description,
        }
      );
      console.log("response", response);
      toast("You addded a product succesfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add a product ");

    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    createProduct();
  };
  
  return (
    <>
      <Header />
      <div>
        <div className={styles.section1}>
          <h3 className={styles.registerHeader}>Add Product</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Shop Name"
              value={shopName}
              onChange={(event) => setShopName(event.target.value)}
              minLength={4}
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Town"
              value={town}
              onChange={(event) => setTown(event.target.value)}
              minLength={4}
              required
            />
            <input
              className={styles.input}
              type="number"
              placeholder="Start year"
              value={startYear}
              onChange={(event) => setStartYear(event.target.value)}
              minLength={4}
              min={1970}
              max={2022}
              required
            />
            <textarea
              cols="30"
              rows="10"
              className={styles.input}
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              minLength={6}
              required
            ></textarea>

            <input type="submit" className={styles.button} value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default addProduct;
