import { useState } from "react";
import ProductItem from "./ProductItem";
import Cart from "./Cart";

function ProductsPage() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Laptop Gamer", price: 600 },
    { id: 2, name: "Mouse Inalámbrico", price: 25 },
    { id: 3, name: "Teclado Mecánico", price: 80 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container mt-4">
      <h2>Productos disponibles</h2>
      <div className="row">
        {products.map((item) => (
          <ProductItem 
            key={item.id} 
            product={item} 
            addToCart={addToCart} 
          />
        ))}
      </div>

      <hr />

      <Cart items={cart} />
    </div>
  );
}

export default ProductsPage;
