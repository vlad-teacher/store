import { getDiscountPercent } from "../utils/getDiscountPercent";

export const getAllItems = (state) => state.shop.items;
export const getIsLoading = (state) => state.shop.isLoading; 

export const getError = (state) => state.shop.error;

export const getProductById = (state, itemId) => state.shop.items.find((item) =>  String(item.id) === itemId);

export const getDiscountItems = (state) => {
  const items = [...state.shop.items];

  return items
    .sort(
      (elem, elem2) =>
        getDiscountPercent(elem2.price, elem2.discont_price) -
        getDiscountPercent(elem.price, elem.discont_price)
    )
    .filter(({ discont_price }, index) => discont_price !== null && index < 4);
};
