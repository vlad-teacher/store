import React from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./views/categories";
import { AllSales } from "./views/all-sales";
import { Main } from "./views/main";
import { Layout } from "./views/layout";
import { NotFound } from "./views/not-found";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Main/>}/>
        <Route path="categories" element={<Categories />} />
        <Route path="all-sales" element={<AllSales />} />
        {/* TODO: добавить роут для одного товара */}
        {/* TODO: добавить all-products (самостоятельно) */}
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};
