import React, { useEffect } from "react";
import {BASE_URL} from '../../constants';

export const Main = () => {

  useEffect(() => {
    fetch(`${BASE_URL}/products/all`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const saleItems = data.filter(({ discont_price }) => discont_price !== null);

      });
  }, []);

  return (
    <>
      <h1>Main</h1>
    </>
  );
};
