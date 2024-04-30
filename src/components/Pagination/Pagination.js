import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      console.log("data", data.products);
    }
    fetchProducts();
  }, []);

  const handleNext = () => {
    if (page !== products.length / 6) {
        setPage(prev => prev+1)
    }
  };
  const handlePrevious = () => {
    if(page !== 1) {
        setPage(prev => prev - 1)
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pagination example</h1>
      <div className="products">
        {products.slice(page * 6 - 6, page * 6).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.id} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      {products.length > 0 && (
        <div className="pagination">
          <span style={{ cursor: "pointer" }} onClick={handlePrevious}>
            ⬅️
          </span>
          {[...Array(products.length / 6)].map((_, index) => (
            <span
              className={page === index + 1 ? "page active" : "page"}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </span>
          ))}
          <span style={{ cursor: "pointer" }} onClick={handleNext}>
            ➡️
          </span>
        </div>
      )}
    </>
  );
}