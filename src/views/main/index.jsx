import React, { useEffect, useCallback } from "react";
import { MemoCardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { SiteHeader } from "../../components/site-header";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountItems, getIsLoading, getError } from "../../store/selectors";
import { getAllItems } from "../../store/async-actions";
import { Link } from "react-router-dom";
import {setLiked} from '../../store/shop-slice';

export const Main = () => {
  const dispatch = useDispatch();
  const saleItems = useSelector(getDiscountItems);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);


  const fn = (id) => {
    dispatch(setLiked(id));
  };

  const onLike = useCallback(fn , [dispatch]); // oldFn, fn


  if (error) {
    return <div>ERROR</div>
  }

  return isLoading ? (
    <div>LOADING...</div>
  ) : (
    <>
      <Link to="products/2"> go see product </Link>
      <SiteHeader />
      <div className={styles.sales}>
        {saleItems.map(({ price, discont_price, description, image, id, isLiked }) => (
          <MemoCardItem
            key={id}
            price={price}
            isLiked={isLiked}
            discont={discont_price}
            discontPercent={getDiscountPercent(price, discont_price)}
            description={description}
            onLike={onLike}
            image={image}
            id={id}
          />
        ))}
      </div>
    </>
  );
};
