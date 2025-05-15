import { useState } from "react";
import "./Products.css";
import { getProducts } from "./Products";
function Products() {
  const [products, setProducts] = useState([]);
  return (
    <div className="products">
      <h1>Products Page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
        suscipit deserunt ex, id doloribus enim, numquam quibusdam alias culpa
        accusantium error eveniet blanditiis aliquid sed quo? Dolores
        voluptatibus fugit eius eveniet quod soluta, reiciendis nulla pariatur.
        Ratione sequi maiores mollitia alias, sed unde molestiae molestias
        harum, nulla at repellat tempore, consectetur nemo. Deleniti
        consequuntur aspernatur cupiditate cum aliquid eveniet in voluptatibus
        pariatur eligendi voluptates illo eos, excepturi repellat dolor qui
        rerum autem, natus recusandae expedita. Enim, ducimus. Eligendi nihil
        officia numquam quibusdam sequi, commodi voluptatibus tempore sapiente
        quisquam distinctio totam facilis mollitia reprehenderit nam ut
        dignissimos corrupti cumque architecto nemo!
      </p>
      <button
        onClick={() => {
          getProducts(setProducts);
        }}
      >
        Get Products
      </button>

      <div>
        {products.length > 0 ? (
          <div className="products-data">
            {products.map((product) => {
              return (
                <div className="card">
                  <img src={product.image} width={"100%"} height={200} />
                  <h4>{product.title}</h4>
                  <p>${product.price}</p>
                  <button>Product Details</button>
                  <button>Add to Cart</button>
                </div>
              );
            })}
          </div>
        ) : (
          <h2 className="no-products">No Products to Display</h2>
        )}
      </div>
    </div>
  );
}

export default Products;
