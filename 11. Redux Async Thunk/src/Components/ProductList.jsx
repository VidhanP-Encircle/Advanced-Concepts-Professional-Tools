import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/ProductSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    const promise = dispatch(fetchProducts());

    return () => {
      promise.abort();
    };
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id} className="border p-3 m-3 rounded">
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
