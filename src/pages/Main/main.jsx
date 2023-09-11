import React from "react";
import Header from "../../components/Header/Header";
import styles from "./main.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const main = () => {
  const [products, setProducts] = useState([]);

  const fetchAllPosts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const { data } = response;
    console.log(data);
    setProducts(data.products);
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        {products.map((product) => (
          <div className={styles.cardWrapper} key={product.id}>
            <div className={styles.imgWrapper}>
              <img
                className={styles.img}
                src={product.thumbnail}
                alt="product_photo"
              />
            </div>
            <div className={styles.productWrapper}>
              <div className={styles.productTitleWrapper}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
                
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.price}> {product.price}$</h3>
                <p className={styles.brand}>Brand: {product.brand}</p>
                <p className={styles.category}>Category: {product.category}</p>
                <p className={styles.rating}>Rating: {product.rating}/5</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default main;
