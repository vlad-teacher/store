import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";

export const Main = () => {
  const [saleItems, setSaleItems] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products/all`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSaleItems(
          data
            .sort(
              (elem, elem2) =>
                getDiscountPercent(elem2.price, elem2.discont_price) -
                getDiscountPercent(elem.price, elem.discont_price)
            )
            .filter(
              ({ discont_price }, index) => discont_price !== null && index < 4
            )
        );
      });
  }, []);

  return (
    <>
      <h1>Main</h1>
      <div className={styles.sales}>
        {saleItems.map(({ price, discont_price, description, image, id }) => (
          <CardItem
            key={id}
            price={price}
            discont={discont_price}
            discontPercent={getDiscountPercent(price, discont_price)}
            description={description}
            image={image}
          />
        ))}
      </div>
    </>
  );
};
