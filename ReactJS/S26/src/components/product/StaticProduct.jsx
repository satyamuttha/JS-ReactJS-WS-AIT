import { getProducts } from "../../pages/products/Products.js";
import { useEffect } from "react";
function StaticProduct({ setProducts }) {
  useEffect(() => {
    getProducts(setProducts);
  }, []);
  return (
    <div>
      <h1>Products Page</h1>
      <br />
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
      <br />
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
      <br />
    </div>
  );
}

export default StaticProduct;
