import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  // const { products, count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [perPageShow, setPerPageShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(count / perPageShow);

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${currentPage}&size=${perPageShow}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [currentPage, perPageShow]);

  return (
    <div className="w-[80%] mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      {/* <p className="text-center my-5">Currently selected page {currentPage}</p>
      <p className="text-center my-5">Data show per page {perPageShow} </p> */}

      <div className="text-center flex justify-center mt-10">
        <div className="btn-group">
          <input
            type="radio"
            name="options"
            data-title="Previous"
            className="btn"
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          {[...Array(pages).keys()].map((number) => (
            <input
              type="radio"
              name="options"
              data-title={number + 1}
              className="btn"
              onClick={() => setCurrentPage(number)}
            />
          ))}
          <input
            type="radio"
            name="options"
            data-title="Next"
            className="btn"
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </div>
        <div className="flex justify-center items-center gap-1 ml-2">
          <p>Show: </p>
          <select
            onChange={(e) => setPerPageShow(e.target.value)}
            className="select select-info w-2/3 max-w-xs"
          >
            <option value="10" selected>
              0
            </option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="99">99</option>
          </select>
        </div>
        {/* {[...Array(pages).keys()].map((number) => (
          <button
            key={number}
            className={currentPage === number && "selected"}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))} */}
      </div>
    </div>
  );
};

export default Home;
