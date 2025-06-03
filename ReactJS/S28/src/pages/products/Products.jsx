import { useState } from "react";
import "./Products.css";
import Product from "../../components/product/Product";
import StaticProduct from "../../components/product/StaticProduct";
import NoProduct from "../../components/product/NoProduct";

function Products() {
  const [products, setProducts] = useState([]);
  return (
    <div className="products">
      <StaticProduct setProducts={setProducts} />

      <div>
        {products.length > 0 ? (
          <div className="products-data">
            {products.map((product) => {
              return <Product product={product} />;
            })}
          </div>
        ) : (
          <NoProduct />
        )}
      </div>
    </div>
  );
}

export default Products;
