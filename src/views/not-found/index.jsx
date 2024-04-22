import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1>PAGE NOT FOUND!</h1>
      <Link to='/'>Go HOME!</Link>
    </>
  );
};
