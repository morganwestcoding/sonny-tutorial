import React from 'react'
import ItemDescription from "./ItemDescription.js";
import styles from './Product.module.css';

function Product({ name, description, price }) {
  
  return (
    <div className={styles.product}>
      <ItemDescription name={name} description={description}/>
      <h2 className={styles.error}>An error occured</h2>
      <h3 className={styles.price}>${price}</h3>

    </div>
  )
}

export default Product;
