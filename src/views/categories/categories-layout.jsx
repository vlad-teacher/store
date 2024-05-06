import React from "react";
import { Link } from "react-router-dom";

export const CategoriesLayout = () => {
      return (
        <>
             <h1>Categories</h1>
             <Link to='/categories/1'>category1</Link>
             <Link to='/categories/2'>category2</Link>
             <Link to='/categories/3'>category3</Link>
        </>
    );
}