import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Home = () => {
  const products = useLoaderData();
  return (
    <div className="w-[80%] mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
