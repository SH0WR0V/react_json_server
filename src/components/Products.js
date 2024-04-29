import React, { useState } from "react";
// import React, { useCallback, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "../assets/loading.gif";

export const Products = () => {
  // const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products/");

  // const fetchProducts = useCallback(async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setProducts(data);
  // }, [url]);

  // useEffect(() => {
  //   fetchProducts();
  // }, [fetchProducts]);

  const { data: products, loading, error } = useFetch(url);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=1")}
        >
          In Stock
        </button>
      </div>
      {loading && (
        <p className="loading">
          <img src={Loading} alt="" />
        </p>
      )}
      {error && <p>{error}</p>}
      {products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info">
              <span>${product.price}</span>
              <span className={product.in_stock ? "instock" : "unavailable"}>
                {product.in_stock ? "In stock" : "Out of stock"}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
};
