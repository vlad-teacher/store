import React from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./views/categories";
import { AllSales } from "./views/all-sales";
import { Main } from "./views/main";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/all-sales" element={<AllSales />} />
    </Routes>
  );
};
